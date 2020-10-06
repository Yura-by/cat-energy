import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import PageMain from '../page-main/page-main';
import PageCatalog from '../page-catalog/page-catalog';
import PageForm from '../page-form/page-form';

enum Menu {
  MAIN = `Главная`,
  CATALOG = `Каталог продукции`,
  PROGRAM = `Подбор программы`,
}

export enum AppRoute {
  MAIN = `/`,
  CATALOG = `/catalog`,
  PROGRAM = `/search-program`
}

interface State {
  activeMenu: Menu;
  isMenuOpen: boolean;
}

export default class PageContent extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: Menu.MAIN,
      isMenuOpen: false,
    };

    this._menuChangeHandler = this._menuChangeHandler.bind(this);
    this._menuButtonChangeHandler = this._menuButtonChangeHandler.bind(this);
  }

  private _menuChangeHandler(menuItem: Menu) {
    this.setState({
      activeMenu: menuItem,
    });
  }

  private _menuButtonChangeHandler() {
    this.setState((prevState) => {
      return {
        isMenuOpen: !prevState.isMenuOpen,
      }
    })
  }

  render() {
    const classNamePageTopWrapper = this.state.activeMenu === Menu.MAIN ? `page-top-wrapper--main` : ``;
    return (
      <React.Fragment>
        <div className={`page-top-wrapper ${classNamePageTopWrapper}`}>

          <Header
            menuItems={Object.values(Menu)}
            linkHrefs={Object.values(AppRoute)}
            activeItem={this.state.activeMenu}
            onMenuItemChange={this._menuChangeHandler}
            isMenuOpen={this.state.isMenuOpen}
            onMenuButtonClick={this._menuButtonChangeHandler}
            isInMainPage={this.state.activeMenu === Menu.MAIN}
          />

          <Switch>
            <Route path={AppRoute.MAIN} component={PageMain} exact />
            <Route path={AppRoute.CATALOG} component={PageCatalog} exact />
            <Route path={AppRoute.PROGRAM} component={PageForm} exact />
          </Switch>

        </div>

        <Footer />
      </React.Fragment>

    );
  }
}
