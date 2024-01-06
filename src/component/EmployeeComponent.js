import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class EmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employee: {},
            department: {},
            organization: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((response) => {
          this.setState({
            employee: response.data.employeeDto,
            department: response.data.departmentDto,
            organization: response.data.organizationDto,
          });
        });
      }

      componentDidUpdate() {
        console.log(this.state);
      }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default EmployeeComponent;