var React = require('react');
var ReactDOM = require('react-dom');
var Item1 = require('../component/item1.react');
var Item2 = require('../component/item2.react');

var Page = React.createClass({
  getInitialState: function(){
  	return {
  		active1: 'list-group-item active',
  		active2: 'list-group-item',
  		active3: 'list-group-item',
  		active4: 'list-group-item'
  	}
  },
  handlerCategory1: function(){
      this.setState({active1: 'list-group-item active',
  				     active2: 'list-group-item',
                          active3: 'list-group-item',
                          active4: 'list-group-item'
  	});
    ReactDOM.render(<Item1 />, document.getElementById('wellMain'));  
  },
  handlerCategory2: function(){
  	this.setState({active1: 'list-group-item',
  				   active2: 'list-group-item active',
                         active3: 'list-group-item',
                         active4: 'list-group-item'
  	});
  	ReactDOM.render(<Item2 />, document.getElementById('wellMain'));
  },
  handlerCategory3: function(){
	this.setState({active1: 'list-group-item ',
				   active2: 'list-group-item',
				   active3: 'list-group-item active',
				   active4: 'list-group-item'
	});
  },
  handlerCategory4: function(){
	this.setState({active1: 'list-group-item ',
				   active2: 'list-group-item',
				   active3: 'list-group-item ',
				   active4: 'list-group-item active'
	});

  },
  render: function(){
      return (
           <div className="list-group">
               <a href="#" className={this.state.active1} onClick={this.handlerCategory1}>Hadoop + HBase</a>
               <a href="#" className={this.state.active2} onClick={this.handlerCategory2}>Mesos + Spark</a>
               <a href="#" className={this.state.active3} onClick={this.handlerCategory3}>Mesos + HDFS + SPARK</a>
               <a href="#" className={this.state.active4} onClick={this.handlerCategory4}>Hadoop + HBase + Hive</a>
           </div>
      )
  }

})
module.exports = Page;
