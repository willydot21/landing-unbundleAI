
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Analyze from "./pages/analyze";
import Results from "./pages/results";
import List, {ListItem, ListItemText} from "./components/list";
import { Icon } from "./components/icons/Icon";


function ListTest() {
  return (
    <List withHr dense>
      <ListItem variant="leading-icon" iconGap="extended">
        <ListItemText primaryText="Leading Icon" secondaryText="SECONDARY TEXT"/> 
        <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" /> 
      </ListItem>
      <ListItem variant="trailing-icon" iconGap="extended">
        <ListItemText primaryText="Trailing Icon" secondaryText="SECONDARY TEXT"/>
        <Icon name="tick" fillColor="secondary_200" strokeColor="none" size="large" /> 
      </ListItem>
      <ListItem variant="text-only">
        <ListItemText primaryText="Text Only"/>
      </ListItem>
    </List>
  )
}

function App() {

  return( 
    <Routes>
      <Route path="/list" element={<ListTest/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="analyze">
        <Route index element={<Analyze/>} /> 
        <Route path="results" element={<Results/>}/>
      </Route>
    </Routes> 
  )
}

export default App

