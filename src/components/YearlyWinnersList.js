import React from 'react';
import { connect } from 'react-redux'
import { fetchWinners, fetchChamp } from '../actions'


class YearlyWinners extends React.Component {
    componentDidMount() {
        const { year } = this.props.match.params;

        this.props.fetchWinners(year);
        this.props.fetchChamp(year);
    }

    renderList() {
        const champCode = this.props.champReducer.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.code;
        return this.props.yearlyreducer.MRData.RaceTable.Races.map(wc => {
            let champion = false;
            if (champCode === wc.Results[0].Driver.code) {
                champion = true;
            }
            return (
                <div className="item" key={wc.season + wc.round.toString()}>
                    <div className="content">
                        <div className="descrption">
                            <p>{wc.raceName}</p>
                            <p data-champion={champion}><a href={wc.Results[0].Driver.url}>{wc.Results[0].Driver.givenName} {wc.Results[0].Driver.familyName}</a></p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {

        if (this.props.yearlyreducer.MRData) {
            console.log("this", this.props.yearlyreducer.MRData.RaceTable.Races[0].Results[0].Driver.code)
            return (
                <div>
                    <h3 className="yearlyWinnerCaption">Season {this.props.yearlyreducer.MRData.RaceTable.season} winners</h3>
                    <p className="track">Track</p>
                    <p className="driver">Driver</p>
                    <div className="ui relaxed defided list">{this.renderList()}</div>
                </div>
            )
        }
        return <div>Loading yearly winners</div>
    }
}

const mapStateToProps = (state) => {
    return { yearlyreducer: state.yearlyreducer, champReducer: state.champreducer }
}

export default connect(mapStateToProps, { fetchWinners, fetchChamp })(YearlyWinners);