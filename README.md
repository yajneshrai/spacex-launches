# SpacexLaunch

This projects shows the SpaceX launch records and allows filter the records based on Launch year, Launch status and Land status.

## Development Approach
- This app is built using Angular 10 and is Server Side Rendered using Angular universal feature.
- Custom components used in the application:
  - Dashbaord      : Acts as a container for showing filter and launch records.
  - Filter         : Contains filters - Launch year, Launch success and Land success. On selecting any value, updates the URL accordingly.
  - Launch Results : A container component that observes URL changes and triggers request to fetch right records.
  - Flight         : Displays the details for individual flight/mission.
- Cusomt Service used in the application:
  - Launch Data Service : Contains a method `getLaunchData()` which takes a map of selected filter key-value pair and updates the API url, makes the GET call to fetch records.
- Basic unit testcases are implemented for testing various application features.

## Lighthouse Score

![Lighthouse Score](https://github.com/yajneshrai/spacex-launches/blob/main/images/Lighthouse%20Score.PNG)

## Deployment

The app is deployed on Heroku and can be accessed here: https://spacex-launch-records.herokuapp.com/launches

## Screenshots 

#### Mobile View: Screen size upto 700 px:

![Mobile View](https://github.com/yajneshrai/spacex-launches/blob/main/images/SPX-Mobile.PNG)

#### Tablet View: Screen size between 700 px and 1024 px:

![Tablet View](https://github.com/yajneshrai/spacex-launches/blob/main/images/SPX-Tablet.PNG)

#### Desktop View 1 : Screen size between 1024 px and 1440 px:

![Desktop 1 View](https://github.com/yajneshrai/spacex-launches/blob/main/images/SPX-Desktop.PNG)

#### Desktop View 2: Screen size above 1440 px:

![Desktop 2 View](https://github.com/yajneshrai/spacex-launches/blob/main/images/SPX-Desktop-Large.PNG)

