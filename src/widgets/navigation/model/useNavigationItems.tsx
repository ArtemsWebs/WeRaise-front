import {Link} from "@tanstack/react-router";

type NavigationItem={
    name: string;
    path: string
    key?: string
}
//ewfwefwf qwd qwdq wd                     dewfwefwe wefwef 
export const useNavigationItems=(navigationItems: NavigationItem[])=>{
    return navigationItems.map((item)=>  { return <Link
        to="/route-a"
    />})
}