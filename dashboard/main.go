package main

import (
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

// ═════════════════════════════════════════════════════════════
// Catppuccin Mocha palette (same family as career-ops)
// ═════════════════════════════════════════════════════════════
var (
	colorBase     = lipgloss.Color("#1e1e2e")
	colorMantle   = lipgloss.Color("#181825")
	colorSurface0 = lipgloss.Color("#313244")
	colorSurface1 = lipgloss.Color("#45475a")
	colorText     = lipgloss.Color("#cdd6f4")
	colorSubtext0 = lipgloss.Color("#a6adc8")
	colorSubtext1 = lipgloss.Color("#bac2de")
	colorMauve    = lipgloss.Color("#cba6f7")
	colorGreen    = lipgloss.Color("#a6e3a1")
	colorRed      = lipgloss.Color("#f38ba8")
	colorYellow   = lipgloss.Color("#f9e2af")
	colorBlue     = lipgloss.Color("#89b4fa")
	colorPeach    = lipgloss.Color("#fab387")
	colorPink     = lipgloss.Color("#f5c2e7")
)

// ═════════════════════════════════════════════════════════════
// Tabs
// ═════════════════════════════════════════════════════════════
type tab int

const (
	tabOverview tab = iota
	tabInvestors
	tabCustomers
	tabHires
	tabCompetitors
	tabMetrics
	tabRetros
	tabBoard
	tabProduct
)

var tabNames = []string{
	"Overview", "Investors", "Customers", "Hires",
	"Competitors", "Metrics", "Retros", "Board", "Product",
}

type sortMode int

const (
	sortDateDesc sortMode = iota
	sortDateAsc
	sortNameAsc
)

var sortNames = []string{"Latest", "Oldest", "A-Z"}

// ═════════════════════════════════════════════════════════════
// Model
// ═════════════════════════════════════════════════════════════
type fileItem struct {
	name string
	path string
	size int64
	age  int // days
}

type model struct {
	path     string
	tab      tab
	sort     sortMode
	items    []fileItem
	selected int
	scroll   int
	width    int
	height   int
	preview  []string
	err      error
}

func initialModel(path string) model {
	m := model{path: path, tab: tabOverview}
	m.loadTab()
	return m
}

func (m *model) loadTab() {
	m.items = nil
	m.selected = 0
	m.scroll = 0
	m.preview = nil

	var patterns []string
	var dirs []string

	switch m.tab {
	case tabOverview:
		m.loadOverview()
		return
	case tabInvestors:
		dirs = []string{"output"}
		patterns = []string{"investor-", "outreach-"}
	case tabCustomers:
		dirs = []string{"reports", "output"}
		patterns = []string{"interview", "health-score", "qbr-", "save-play", "churn-"}
	case tabHires:
		dirs = []string{"reports", "output"}
		patterns = []string{"candidate-", "jd-", "perf-review-", "skip-level-"}
	case tabCompetitors:
		dirs = []string{"reports"}
		patterns = []string{"compete-"}
	case tabMetrics:
		dirs = []string{"data", "reports"}
		patterns = []string{"metrics", "cohort-", "funnel-"}
	case tabRetros:
		dirs = []string{"reports"}
		patterns = []string{"retro-"}
	case tabBoard:
		dirs = []string{"output", "reports"}
		patterns = []string{"board-"}
	case tabProduct:
		dirs = []string{"output", "data"}
		patterns = []string{"prd-", "adr-", "roadmap-", "product-"}
	}

	for _, d := range dirs {
		dirPath := filepath.Join(m.path, d)
		if _, err := os.Stat(dirPath); os.IsNotExist(err) {
			continue
		}
		files, err := os.ReadDir(dirPath)
		if err != nil {
			continue
		}
		for _, f := range files {
			if f.IsDir() {
				continue
			}
			matched := false
			for _, p := range patterns {
				if strings.Contains(f.Name(), p) {
					matched = true
					break
				}
			}
			if !matched {
				continue
			}
			info, err := f.Info()
			if err != nil {
				continue
			}
			ageDays := int(info.ModTime().Unix())
			m.items = append(m.items, fileItem{
				name: f.Name(),
				path: filepath.Join(dirPath, f.Name()),
				size: info.Size(),
				age:  ageDays,
			})
		}
	}

	m.applySort()

	if len(m.items) > 0 {
		m.loadPreview()
	}
}

func (m *model) applySort() {
	switch m.sort {
	case sortDateDesc:
		sort.Slice(m.items, func(i, j int) bool {
			return m.items[i].age > m.items[j].age
		})
	case sortDateAsc:
		sort.Slice(m.items, func(i, j int) bool {
			return m.items[i].age < m.items[j].age
		})
	case sortNameAsc:
		sort.Slice(m.items, func(i, j int) bool {
			return m.items[i].name < m.items[j].name
		})
	}
}

func (m *model) loadOverview() {
	m.preview = []string{
		"",
		"  founder-ops · pipeline overview",
		"  ────────────────────────────────",
		"",
	}

	counts := map[string]int{}
	for _, d := range []string{"output", "reports", "data"} {
		dirPath := filepath.Join(m.path, d)
		if _, err := os.Stat(dirPath); os.IsNotExist(err) {
			continue
		}
		files, _ := os.ReadDir(dirPath)
		for _, f := range files {
			if f.IsDir() || strings.HasPrefix(f.Name(), ".") {
				continue
			}
			counts["total"]++
		}
	}

	sections := []struct {
		label    string
		dir      string
		patterns []string
	}{
		{"Investor artifacts", "output", []string{"investor-", "outreach-"}},
		{"Customer artifacts", "reports", []string{"interview", "qbr-", "health-", "save-play", "churn-"}},
		{"Hire artifacts", "reports", []string{"candidate-", "perf-review-", "skip-"}},
		{"Weekly retros", "reports", []string{"retro-week"}},
		{"Monthly retros", "reports", []string{"retro-month"}},
		{"Compete deep dives", "reports", []string{"compete-"}},
		{"PRDs", "output", []string{"prd-"}},
		{"Board packs", "output", []string{"board-"}},
	}

	for _, s := range sections {
		count := 0
		dirPath := filepath.Join(m.path, s.dir)
		if files, err := os.ReadDir(dirPath); err == nil {
			for _, f := range files {
				for _, p := range s.patterns {
					if strings.Contains(f.Name(), p) {
						count++
						break
					}
				}
			}
		}
		m.preview = append(m.preview, fmt.Sprintf("    %-24s  %d", s.label, count))
	}

	m.preview = append(m.preview, "")
	m.preview = append(m.preview, "  ────────────────────────────────")
	m.preview = append(m.preview, "")
	m.preview = append(m.preview, "  Press tab to browse sections.")
	m.preview = append(m.preview, "  Press r to refresh from disk.")
	m.preview = append(m.preview, "  Press s to cycle sort order.")
	m.preview = append(m.preview, "")
}

func (m *model) loadPreview() {
	if m.selected >= len(m.items) {
		return
	}
	data, err := os.ReadFile(m.items[m.selected].path)
	if err != nil {
		m.preview = []string{"error: " + err.Error()}
		return
	}
	lines := strings.Split(string(data), "\n")
	maxLines := m.height - 6
	if maxLines < 20 {
		maxLines = 20
	}
	if len(lines) > maxLines {
		lines = lines[:maxLines]
		lines = append(lines, "", "  … (truncated — open the file to read the rest)")
	}
	m.preview = lines
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c":
			return m, tea.Quit
		case "tab", "l", "right":
			m.tab = (m.tab + 1) % 9
			m.loadTab()
		case "shift+tab", "h", "left":
			m.tab = (m.tab + 8) % 9
			m.loadTab()
		case "j", "down":
			if m.selected < len(m.items)-1 {
				m.selected++
				m.loadPreview()
			}
		case "k", "up":
			if m.selected > 0 {
				m.selected--
				m.loadPreview()
			}
		case "g":
			m.selected = 0
			m.loadPreview()
		case "G":
			m.selected = len(m.items) - 1
			m.loadPreview()
		case "r":
			m.loadTab()
		case "s":
			m.sort = (m.sort + 1) % 3
			m.applySort()
			m.loadPreview()
		case "1":
			m.tab = tabOverview
			m.loadTab()
		case "2":
			m.tab = tabInvestors
			m.loadTab()
		case "3":
			m.tab = tabCustomers
			m.loadTab()
		case "4":
			m.tab = tabHires
			m.loadTab()
		case "5":
			m.tab = tabCompetitors
			m.loadTab()
		case "6":
			m.tab = tabMetrics
			m.loadTab()
		case "7":
			m.tab = tabRetros
			m.loadTab()
		case "8":
			m.tab = tabBoard
			m.loadTab()
		case "9":
			m.tab = tabProduct
			m.loadTab()
		}
	}
	return m, nil
}

func (m model) View() string {
	if m.width == 0 {
		return "loading…"
	}

	// Tabs
	var tabs []string
	for i, name := range tabNames {
		s := lipgloss.NewStyle().Padding(0, 2)
		if tab(i) == m.tab {
			s = s.Background(colorMauve).Foreground(colorBase).Bold(true)
		} else {
			s = s.Foreground(colorSubtext0)
		}
		tabs = append(tabs, s.Render(fmt.Sprintf("%d %s", i+1, name)))
	}
	tabBar := lipgloss.JoinHorizontal(lipgloss.Top, tabs...)

	// List
	listWidth := m.width / 3
	if listWidth < 36 {
		listWidth = 36
	}
	var listLines []string
	titleStyle := lipgloss.NewStyle().Foreground(colorMauve).Bold(true)
	listLines = append(listLines, titleStyle.Render(fmt.Sprintf(" %s (%d)", tabNames[m.tab], len(m.items))))
	subtitleStyle := lipgloss.NewStyle().Foreground(colorSubtext0)
	listLines = append(listLines, subtitleStyle.Render(fmt.Sprintf(" sort: %s", sortNames[m.sort])))
	listLines = append(listLines, "")

	if m.tab == tabOverview {
		// Overview is rendered in preview pane
	} else if len(m.items) == 0 {
		emptyStyle := lipgloss.NewStyle().Foreground(colorSubtext0).Italic(true)
		listLines = append(listLines, emptyStyle.Render(" No items yet."))
		listLines = append(listLines, emptyStyle.Render(" Run a founder-ops mode to populate."))
	} else {
		for i, item := range m.items {
			line := " " + item.name
			if len(line) > listWidth-2 {
				line = line[:listWidth-5] + "..."
			}
			if i == m.selected {
				line = lipgloss.NewStyle().Background(colorSurface0).Foreground(colorText).Bold(true).Render(line)
			} else {
				line = lipgloss.NewStyle().Foreground(colorText).Render(line)
			}
			listLines = append(listLines, line)
		}
	}
	listContent := strings.Join(listLines, "\n")
	listBox := lipgloss.NewStyle().
		Width(listWidth).
		Height(m.height - 5).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(colorSurface1).
		Render(listContent)

	// Preview
	previewWidth := m.width - listWidth - 4
	var previewContent string
	if len(m.preview) > 0 {
		previewContent = strings.Join(m.preview, "\n")
	} else {
		previewContent = lipgloss.NewStyle().Foreground(colorSubtext0).Italic(true).Render(
			"\n  Select an item to preview.\n")
	}
	previewBox := lipgloss.NewStyle().
		Width(previewWidth).
		Height(m.height - 5).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(colorSurface1).
		Padding(0, 1).
		Render(previewContent)

	main := lipgloss.JoinHorizontal(lipgloss.Top, listBox, previewBox)

	// Help bar
	helpStyle := lipgloss.NewStyle().Foreground(colorSubtext0)
	helpLeft := helpStyle.Render(" tab: next · shift+tab: prev · j/k: up/down · g/G: top/bottom")
	helpRight := helpStyle.Render("s: sort · r: refresh · 1-9: jump · q: quit ")

	spaces := m.width - lipgloss.Width(helpLeft) - lipgloss.Width(helpRight)
	if spaces < 1 {
		spaces = 1
	}
	help := helpLeft + strings.Repeat(" ", spaces) + helpRight

	return lipgloss.JoinVertical(lipgloss.Left, tabBar, main, help)
}

func main() {
	path := "."
	for i, arg := range os.Args[1:] {
		if arg == "--path" && i+1 < len(os.Args)-1 {
			path = os.Args[i+2]
		}
	}
	abs, _ := filepath.Abs(path)

	fmt.Printf("founder-ops dashboard · reading from %s\n", abs)

	p := tea.NewProgram(initialModel(abs), tea.WithAltScreen())
	if _, err := p.Run(); err != nil {
		fmt.Println("error:", err)
		os.Exit(1)
	}
}
