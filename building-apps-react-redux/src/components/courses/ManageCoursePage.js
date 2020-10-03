// Section 1 - Imports
import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

// Section 2 - Component
class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

// Section 3 - PropTypes
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

// Section 4 - Redux mappings (state & actions)
function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}
// Import map dispacth to porps as a object instead of a function
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

// Section 5 - Redux connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
