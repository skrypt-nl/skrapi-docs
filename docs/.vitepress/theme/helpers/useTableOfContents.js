export default {
    useTableOfContents(tableOfContents) {
        let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

        let getHeadings = useCallback((tableOfContents) => {
            return tableOfContents
                .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
                .map((id) => {
                    let el = document.getElementById(id)
                    if (!el) return

                    let style = window.getComputedStyle(el)
                    let scrollMt = parseFloat(style.scrollMarginTop)

                    let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
                    return { id, top }
                })
        }, [])

        useEffect(() => {
            if (tableOfContents.length === 0) return
            let headings = getHeadings(tableOfContents)
            function onScroll() {
                let top = window.scrollY
                let current = headings[0].id
                for (let heading of headings) {
                    if (top >= heading.top) {
                        current = heading.id
                    } else {
                        break
                    }
                }
                setCurrentSection(current)
            }
            window.addEventListener('scroll', onScroll, { passive: true })
            onScroll()
            return () => {
                window.removeEventListener('scroll', onScroll, { passive: true })
            }
        }, [getHeadings, tableOfContents])

        return currentSection
    }
}
