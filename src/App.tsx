import React from 'react';
import logo from './logo.svg';
import './App.css';
import { KanbanComponent } from '@syncfusion/ej2-react-kanban';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban/src';


class App extends React.Component {
  public kanbanDatasource : Object[] = [
    {
      "Id": "Task 1",
      "Title": "Task - 29001",
      "Status": "Open",
      "Summary": "Analyze new requirements gathered from the clients",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Mary Pirogina"
    },
    {
      "Id": "Task 2",
      "Title": "Task - 29002",
      "Status": "In Progress",
      "Summary": "Collect data from the clients",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 3.7,
      "Assignee": "Dmitrii Oleinic"
    },
    {
      "Id": "Task 3",
      "Title": "Task - 29003",
      "Status": "Review",
      "Summary": "Make conclusions about the previous project",
      "Type": "Story",
      "Priority": "Mid",
      "Estimate": 3.3,
      "Assignee": "Josh Muray"
    },
    {
      "Id": "Task 4",
      "Title": "Task - 29004",
      "Status": "Testing",
      "Summary": "Buy supplies",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Henry Harry"
    },
    {
      "Id": "Task 5",
      "Title": "Task - 29004",
      "Status": "Close",
      "Summary": "Archive this project",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 3.5,
      "Assignee": "George Lome"
    }
  ]

  render(): React.ReactNode {

    return(<KanbanComponent dataSource={this.kanbanDatasource} keyField = "Status" 
    cardSettings = {{contentField: "Summary", headerField: "Id"}} width = "100%" height = "100%" 
    swimlaneSettings={{keyField: "Assignee"}} enableTooltip={true}>
        
        <ColumnsDirective>
        <ColumnDirective headerText = 'To Do' keyField = "Open"></ColumnDirective>
        <ColumnDirective headerText = 'In Progress' keyField = "In Progress"></ColumnDirective>
        <ColumnDirective headerText = 'Review' keyField = "Review"></ColumnDirective>
        <ColumnDirective headerText = 'Testing' keyField = "Testing"></ColumnDirective>
        <ColumnDirective headerText = 'Close' keyField = "Close"></ColumnDirective>
        </ColumnsDirective>
    </KanbanComponent>);
  }
}

export default App;
