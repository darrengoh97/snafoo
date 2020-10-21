import React from 'react';
import Card from '../components/card';

export default function Stock({ snacks = [] }) {
    const sortedSnacks = [].concat(snacks).sort((a, b) => a.product < b.product);

    return (
        <div className="site-bd-section site-bd-section_geo" id="current">
            <div className="u-constrainer">
                <div className="layoutPanel">
                    <div className="layoutPanel-hd">
                        <div className="layoutPanel-hd-title">
                            <h2 className="hdg hdg_2">Currently In Stock</h2>
                        </div>
                        <div className="heroBanner-content-bd">
                            <p className="copy">
                                Here are the snacks that are available in the Nerdery kitchen now
                            </p>
                        </div>
                    </div>
                    <div className="layoutPanel-bd">
                        <div className="gridLayout">
                            {
                                sortedSnacks.map((snack) => <Card key={`${snack.id}-card`} item={snack} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}