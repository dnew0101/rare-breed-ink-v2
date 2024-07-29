import React from 'react'
import { Link } from 'gatsby'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../@/components/ui/navigation-menu"

const Header = () => {
  return (
    <header>
      <nav>
        <NavigationMenu>
          <NavigationMenuList style={{ float: 'left' }}>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink>
                  <img src="/path-to-logo.png" alt="Logo" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList style={{ float: 'right' }}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="/">
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="/about">
                  <NavigationMenuLink>About</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="/contact">
                  <NavigationMenuLink>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  )
}

export default Header