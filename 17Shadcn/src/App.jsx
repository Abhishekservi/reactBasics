import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"
 
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  )
}
 
export default App