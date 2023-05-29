import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root:  {
        flexGrow: 1
    },
    tab: {
        fontSize: 12,
        color: '#5f6368',
        textTransform: 'Capitalize',
        height: 10,
        fontWeight: 600,
        fontFamily: 'Open Sans'
    },
    tabs: {
        height: 10
    }
})

const CenteredTabs = () => {
    const classes = useStyles();
    return (
        <>
        <Paper>
            <Tabs className={classes.tabs} centered textColor="primary" indicateColor="primary">
                <Tab className={classes.tab} label="Questions">

                </Tab>
                <Tab className={classes.tab} label="Responses">
                    
                </Tab>
            </Tabs>
        </Paper>
        </>
    )
}

export default CenteredTabs