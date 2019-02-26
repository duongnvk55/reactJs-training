
import React, { Component } from 'react';

class VacancySign extends Component {
    render() {
    	const { hasVacancy } = this.props;
        return (
            <div className="container">
                <p>{(hasVacancy == false)? 'No Vacancy':'Vacancy'}</p>
            </div>
        );
    }
}


export default VacancySign;