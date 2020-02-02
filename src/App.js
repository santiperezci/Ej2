import React, { Component } from "react";
import "./App.css";

import Subject from "./Components/Subject.jsx";

class App extends Component {
  state = {
    subjects: [
      {
        title: "Programación",
        teacher: "Alberto Valero",
        subjectView: false,
        students: [
          { name: "Alvaro Rodriguez", mark: 10, markView: true },
          { name: "Jaime Dordio", mark: 2, markView: false },
          { name: "Mateo San Isidro", mark: 6, markView: false }
        ]
      },

      {
        title: "Estructuras de Datos",
        teacher: "Jorge",
        subjectView: false,
        students: [
          { name: "Carlos", mark: 10, markView: false },
          { name: "Javier", mark: 2, markView: false },
          { name: "Jaime", mark: 6, markView: false }
        ]
      }
    ]
  };

  showMarkHandler = name => {
    this.state.subjects.forEach((subject, subjectIndex) => {
      subject.students.forEach((student, studentIndex) => {
        if (student.name === name) {
          this.setState(prevState => {
            let obj = Object.assign({}, prevState.subjects);
            obj[subjectIndex].students[studentIndex].markView = !obj[
              subjectIndex
            ].students[studentIndex].markView;
            return { obj };
          });
        }
      });
    });
  };

  showSubjectHandler = title => {
    this.state.subjects.forEach((subject, subjectIndex) => {
      if (subject.title === title) {
        this.setState(prevState => {
          let obj = Object.assign({}, prevState.subjects);
          obj[subjectIndex].subjectView = !obj[subjectIndex].subjectView;
          return { obj };
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.subjects.map((elem, index) => {
          return (
            <Subject
              title={elem.title}
              subjectView={elem.subjectView}
              onSubjectClick={this.showSubjectHandler}
              teacher={elem.teacher}
              students={elem.students}
              onMarkClick={this.showMarkHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
