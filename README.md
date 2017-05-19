# Guidelines


## General

##### Do define one thing, such as a service, component or model, per file.

##### Consider limiting files to 400 lines of code.

##### Consider limiting functions to no more than 75 lines.


## Structure

##### Do create folders named for the feature area they represent.

##### [Angular] Do create an Angular module for each feature area.

##### Do create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule. For Vanilla simply have a shared folder.

##### Do declare symbols in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
+ Drawer Navigation

##### [Angular] Do import all external modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
+ UI For Nativescript Drawer modules

##### Names of folders and files should clearly convey their intent. For example, app/heroes/hero-list.component.ts may contain a component that manages a list of heroes.
+ **Angular/TabNavaigtion**
  - browse/browse.component.html|ts|css
  - featured/featured.component.html|ts|css
+ **Angular/MasterDetail**
  - cars/cars-list.component.html|ts|css
  - cars/car-detail/car-detail.component.html|ts|css
  - cars/shared/car.model.ts
  - cars/shared/cars.service.ts
+ **Vanilla/TabNavigation**
  - browse/BrowseView.xml|js|ts
  - featured/FeaturedView.xml|js|ts
  - tabs-page.xml|js|css
+ **Vanilla/MasterDetail**
  - cars/cars-list-page.xml|js|ts
  - cars/cars-list-view-model.js|ts
  - cars/car-detail/car-detail-page.xml|js|ts
  - cars/shared/car-model.js|ts
  - cars/shared/cars-service.js|ts

##### Do follow a pattern that describes the symbol's feature then its type. The recommended pattern is **feature.type.ts|css|html** for Angular and **feature-type.ts|js|css|xml** for Vanilla. Exception: Vanilla custom components get the selector from the file name, so they should be named **FeatureView.xml|js|css** since they are of type View.
+ **Angular/TabNavaigtion**
  - browse.component.html|ts|css
  - featured.component.html|ts|css
+ **Angular/MasterDetail**
  - cars-list.component.html|ts|css
  - car.model.ts
  - cars.service.ts
+ **Vanilla/TabNavigation**
  - BrowseView.xml|js|ts
  - FeaturedView.xml|js|ts
  - tabs-page.xml|js|css
+ **Vanilla/MasterDetail**
  - cars-list-page.html|js|ts
  - car-model.js|ts
  - cars-service.js|ts
  - cars-list-view-model.js|ts

##### Do match the name of the symbol to the name of the file.
+ **Angular/MasterDetail**
  - cars-list.component.ts -> class CarsListComponent
  - car.model.ts -> class Car (exception)
+ **Vanilla/MasterDetail**
  - cars-list-view-model.ts -> class CarsListViewModel
  - car-model.ts -> class Car (exception)
  
##### Do name the style file [component-name].component.css, where [component-name] is the component name.

##### Do give the file name the .module.ts extension and append the symbol name with the suffix Module. Do name the module after the feature and folder it resides in.
+ **Angular/MasterDetail**
  - cars/cars.modules.ts -> class CarsModule

##### Do suffix a RoutingModule class name with RoutingModule and Do end the filename of a RoutingModule with -routing.module.ts.
+ **Angular/MasterDetail**
  - cars/cars-routing.module.ts -> class CarsRoutingModule
  
##### Do use an uppercase element selector value (e.g. AdminUsers) for components.
+ **Angular/TabNavaigtion**
  - search.component.ts -> selector: "Search"
+ **Vanilla/TabNavigation**
  - SearchView.xml|js (selector comes from the name of the file)
  
##### Delegate complex component logic to services

##### Do refactor logic for making data operations and interacting with data to a service.
  
  
## Code

##### Consider leaving one empty line between third party imports and application imports.

##### Consider listing import lines alphabetized by the module.

##### [TS/Angular] Consider listing destructured imported symbols alphabetically.

##### Do place properties up top followed by methods.

##### Do place private members after public members, alphabetized.

##### [TS/Angular] Do declare variables with let instead of var.

##### [TS/Angular] Do declare variables with const if their values should not change during the application lifetime.

##### Consider spelling const variables in lower camel case.

##### Do name event handler methods with the prefix on followed by the event name.
+ loaded -> onLoaded()
+ itemTap -> onItemTap()

##### Do limit logic in a component/code-behind/view-model to only that required for the view. All other logic should be delegated to services.

##### Do put presentation logic in the component class, and not in the template. 
+ Average power: {{totalPowers / heroes.length}} (Wrong)


## UI Components Specific

### ActionBar

##### Use ActionBar only as a root to the Page element. In Angular, the Page element is hidden - use at root level.
##### Never Use ActionBar in custom component in Vanilla or shared component in Angular.

### ListView

##### Use RadListView when having a dynamic page listview. Use ListView when having a list of items (like links).
##### Use _itemTap_ event when handling selection in *RadListView* instead of _tap_ on the item template.

### Drawer

##### Use RadSideDrawer only as a root to the Page element. In Angular, the Page element is hidden - use at root level.
##### Never Use RadSideDrawer in custom component in Vanilla or shared component in Angular.
