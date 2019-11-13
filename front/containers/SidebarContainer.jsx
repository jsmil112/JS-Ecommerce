// import React from 'react';
// import Sidebar from 'react-sidebar';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: 'white' } }}
//       >
//         <button onClick={() => this.onSetSidebarOpen(true)}>
//           Open sidebar
//         </button>
//       </Sidebar>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return <Sidebar isOpen={this.state.open} toggleOpen={this.toggleOpen} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
