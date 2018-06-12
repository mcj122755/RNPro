

import React from 'react';
import {StackNavigator} from 'react-navigation';
import ProblemsNici from  '../screens/ProblemsNici';
import ProblemsList from  '../screens/ProblemsList';
import ProblemsDetail from  '../screens/ProblemsDetail';
import ProblemsFeedBack from  '../screens/ProblemsFeedBack';


const AppNavigation = StackNavigator(

    {
        ProblemsNici:{
            screen:ProblemsNici
        },
        ProblemsList:{
            screen:ProblemsList
        },
        ProblemsDetail:{
            screen:ProblemsDetail
        },
        ProblemsFeedBack:{
            screen:ProblemsFeedBack
        }
    }
);

export default() => <AppNavigation />


// import React from 'react';
// import {StackNavigator} from 'react-navigation';
// import TabarComponent from './src/components/tabBarComponent';
// const AppNavigation = StackNavigator(

//     {
//         TabarComponent:{
//             screen:TabarComponent
//         }
//     }
// );

// export default() => <AppNavigation />
