import React, { Component } from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import ItemListScreen from './components/ItemListScreen';
import SingleItemScreen from './components/SingleItemScreen';
import ContentScreen from './components/ContentScreen';
import ShoppingListScreen from './components/ShoppingListScreen';
import FavouriteScreen from './components/FavouriteScreen';
import FavouriteItemScreen from './components/FavouriteItemScreen';
import DrawerMenu from './components/DrawerMenu';
import MenuIcon from './res/icons/icon_menu.png';


class RouterComponent extends Component {
    
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Stack key="launcher" hideNavBar>
                        <Scene
                            key="splash"
                            component={SplashScreen}
                            title="Splash"
                        />
                    </Stack> 
                    <Stack key="main" hideNavBar>
                        <Drawer
                            key="drawer"
                            contentComponent={DrawerMenu}
                            drawerImage={MenuIcon}
                        >
                            <Scene
                                key="home"
                                component={HomeScreen}
                                title="Home"
                                initial
                                hideNavBar={false}
                            />
                            <Scene
                                key="author"
                                component={ContentScreen}
                                title="Author"
                                hideNavBar={false}
                            />
                            <Scene
                                key="terms"
                                component={ContentScreen}
                                title="Terms and Condition"
                                hideNavBar={false}
                            />
                            <Scene
                                key="privacy"
                                component={ContentScreen}
                                title="Privacy Policy"
                                hideNavBar={false}
                            />
                            <Scene
                                key="shoppingList"
                                component={ShoppingListScreen}
                                title="Shopping List"
                                hideNavBar={false}
                            />
                                <Scene
                                    key="favourites"
                                    component={FavouriteScreen}
                                    title="Favourites"
                                    hideNavBar={false}
                                />
                            
                        </Drawer>
                        <Scene
                                key="itemList"
                                component={ItemListScreen}
                                title="ItemList"
                                hideNavBar={false}
                        />
                        <Scene
                                key="singleItem"
                                component={SingleItemScreen}
                                title="Item"
                                hideNavBar={false}
                        />
                        <Scene
                                key="favouriteItem"
                                component={FavouriteItemScreen}
                                title="Favourites"
                                hideNavBar={false}
                        />
                      
                    </Stack>
                </Stack>
            </Router>
        );
    }  
}


export default RouterComponent;
