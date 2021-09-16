import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from './utils/not_found/NotFound'
import Chart1 from './chart1/Chart1'
import Chart2 from './chart2/Chart2'
import Chart3 from './chart3/Chart3'
import Chart4 from './chart4/Chart4'
import { GlobalState } from '../../GlobalState'



function Pages() {
    const state = useContext(GlobalState)



    return (
        <div className="allpages">
            <Switch>
                <Route path="/" exact component={Chart1} />

                <Route path="/chart1" exact component={Chart1} />
                <Route path="/chart2" exact component={Chart2} />
                <Route path="/chart3" exact component={Chart3} />
                <Route path="/chart4" exact component={Chart4} />


                <Route path="*" exact component={NotFound} />
            </Switch>
        </div>
    )
}

export default Pages
