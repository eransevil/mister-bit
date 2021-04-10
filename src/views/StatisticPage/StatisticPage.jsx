
import { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import bitcoinService from '../../services/bitcoinService.js'


import './StatisticPage.scss'

export class StatisticPage extends Component {

    state = {
        marketPrices: null,
        ConfirmedTransactions: null,
        months: null
    }

    componentDidMount() {
        this.getMarketPrice()
        this.getmonths()
    }

    async getMarketPrice() {
        const marketPrices = await bitcoinService.getMarketPrice()
        const priceArr = marketPrices.map((price) => {
            return price.y
        })
        this.setState({ marketPrices: priceArr })
    }
    getmonths() {
        var today = new Date();
        var month = +today.getMonth();
        const months = [ '01/' +'0'+ (month - 2), '01/' +'0'+ (month - 1), '01/' +'0'+ (month), '01/' + '0'+(month+1)]
        this.setState({ months })

    }

    render() {
        const { marketPrices, months } = this.state
        return (
            <div>
                <h1>Market Prices</h1>
                {
                    marketPrices && <Sparklines data={marketPrices} height={30}>
                        <SparklinesLine />
                        <SparklinesSpots />
                    </Sparklines>

                }
                { months && <div className="time-line">
                    {months.map(mount => <span key={mount}> {mount} </span>)}
                </div>
                }
            </div>
        )
    }
}
