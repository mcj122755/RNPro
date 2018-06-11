

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


