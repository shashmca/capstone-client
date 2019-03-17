import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Calendar from 'react-calendar'

import { loadEvents } from '../../../actions/event'
import { addEvent, deleteEvent } from '../../../actions/event'

import './index.scss';

class EventCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            date: new Date()
        }
    }
    componentDidMount() {
        let { actions, user } = this.props;
        actions.loadEvents(user.id);
    }
    onDateChange = date => this.setState({ date })

    handleForm(e) {
        e.preventDefault()
        let { title, type, time } = this.refs;
        let { date } = this.state;
        let { actions, user } = this.props;
        let newEvent = {
            title: title.value,
            type: type.value,
            date: date,
            time: time.value
        }
        actions.addEvent(user.id, newEvent);
        this.toggleForm();
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    renderForm() {
        let { isOpen, date } = this.state;
        if (!isOpen) return (<button onClick={e => this.toggleForm()} className="btn btn-info btn-sm"><span className="fa fa-plus"> Event</span></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Create Event</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <input className="form-control" ref="title" placeholder="Event Title" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" ref="type">
                                <option key=''>Type of Event</option>
                                <option key='birthday'>Birthday</option>
                                <option key='wedding'>Wedding</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input readOnly className="form-control" value={date.toDateString()} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="time" placeholder="Time (optional)" />
                        </div>
                        <button className="btn btn-sm btn-primary">Create</button>
                        <button onClick={e => this.toggleForm()} type="button" className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    deleteEvent(eventId) {
        let { actions } = this.props;
        actions.deleteEvent(eventId);
    }
    renderEvents() {
        let { events } = this.props;
        return events.map((event, idx) => {
            return (
                <div className="col-8 col-sm-12 col-md-12" key={idx}>
                    <div className="alert alert-info">
                        <span className="badge">{event.type}</span> &mdash; <span>{event.date}</span>
                        <i onClick={e => this.deleteEvent(event.id)} className="fa fa-times-circle float-right"></i>
                        <hr />
                        <p><span>{event.title}</span></p>
                    </div>
                </div>
            )
        })
    }
    render() {
        let { date } = this.state;
        return (
            <div>
                <section className="container row">
                    <div className="col-6 col-sm-6 col-md-6 float-left">
                        <Calendar onChange={this.onDateChange} value={date} minDate={new Date()} />
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 float-left">
                        {this.renderForm()}
                    </div>
                </section>
                <hr />
                <div className="row">{this.renderEvents()}</div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    user: state.user,
    events: state.events
})
const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadEvents, addEvent, deleteEvent }, dispatch)
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(EventCalendar);

