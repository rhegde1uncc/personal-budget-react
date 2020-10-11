import React from 'react';
import Chart from '../Chart/Chart'
import D3chart from '../D3chart/D3chart'
import axios from 'axios';





  export default class HomePage extends React.Component {
    state = {
        dataSource : {}
      }

      componentDidMount(){
        this.getData();
     }
      async getData() {
        var tmp = {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#8d6b19',
                  '#cc65fe',
                  '#aaae11',
                  '#ff3618'
              ],
              }
            ]
          }
        const res = await axios.get(`http://localhost:3100/budget`);
        for(var i=0; i<res.data.myBudget.length; i++) {
            tmp.datasets[0].data.push(res.data.myBudget[i].budget);
            tmp.labels.push(res.data.myBudget[i].title);
    
        }
        this.setState({dataSource: tmp})
        console.log('Homepage dataSource ',this.state.dataSource);
    
    }

render() {
  return (
    <div  className="container center">
   
        <main role="main" id ="main" className="page-area" itemScope itemType="https://schema.org/SoftwareApplication">
      
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Stay on track</span></h1>
                <p>
                    <span itemProp="description">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </span>
                </p>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Alerts</span></h1>
                <p><span itemProp="description">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </span>
                </p>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Results</span></h1>
                <p><span itemProp="description">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </span>
                </p>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Free</span></h1>
                <p><span itemProp="description">
                    This app is free!!! And you are the only one holding your data!
                </span>
                </p>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Stay on track</span></h1>
                <p><span itemProp="description">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </span>
                </p>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Alerts</span></h1>
                <p><span itemProp="description">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </span>
                </p>
            </article>
            <div className="row">
            <article className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">D3 Chart</span></h1>
                <D3chart dataSource={this.state.dataSource}/>
            </article>
    
            <article className="text-box" itemScope itemType="https://schema.org/Offer"> 
                <h1><span itemProp="name">Chart</span></h1>
                <p>
                <Chart dataSource={this.state.dataSource}/>
                </p>
            </article>
        </div>

        </main>

    </div>
  )
}
  }