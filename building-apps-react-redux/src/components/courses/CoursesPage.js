import React from "react";
import { connect } from "react-redux";
// The connect function connects our component to redux
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  // on Class fields better use arrow funcion in order the scope of this to be the same as the class
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        ></input>
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// This function determines what state is passed to our component via props
function mapStateToProps(state) {
  return {
    // Here be specific, to avoid React to reload when no needed
    courses: state.courses,
  };
}

// We have to pass to DISPATCH that notifies REDUX
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// 2 fn calls, the connect fn return a fn and we invoke immediately this with CoursePage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/*
També ho podriem fer sino de la següent forma en 2 linies
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
export default connectedStateAndProps(CoursesPage)

*/
