import React from 'react';


function HomePage() {
  return (
    <div  className="container center">
   
        <main role="main" id ="main" className="page-area" itemScope itemType="https://schema.org/SoftwareApplication">
      
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Stay on track</span></h1>
                <p>
                    <span itemProp="description">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </span>
                </p>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Alerts</span></h1>
                <p><span itemProp="description">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </span>
                </p>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Results</span></h1>
                <p><span itemProp="description">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </span>
                </p>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Free</span></h1>
                <p><span itemProp="description">
                    This app is free!!! And you are the only one holding your data!
                </span>
                </p>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Stay on track</span></h1>
                <p><span itemProp="description">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </span>
                </p>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">Alerts</span></h1>
                <p><span itemProp="description">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </span>
                </p>
            </section>
            <div className="row">
            <section className="text-box" itemScope itemType="https://schema.org/Offer">
                <h1><span itemProp="name">D3 Chart</span></h1>
                <svg ></svg>
            </section>
    
            <section className="text-box" itemScope itemType="https://schema.org/Offer"> 
                <h1><span itemProp="name">Chart</span></h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </section>
        </div>

        </main>

    </div>
  );
}

export default HomePage;