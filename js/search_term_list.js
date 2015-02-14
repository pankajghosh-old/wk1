/** @jsx React.DOM */

var React = require('react/addons');
var SearchTerm = require('./search_term');

var SearchTermList = React.createClass({
  getInitialState:function(){
    return {selectedSearchTerm:""};
  },
  render: function() {
    var searchTermNodes = this.props.data.map(function (searchTerm) {
      return (
        <SearchTerm term={searchTerm.term} key={searchTerm.term} 
                    isSelected={searchTerm.term===this.state.selectedSearchTerm} 
                    parent_click_handler={this.handle_child_click}>
        </SearchTerm>
        );
    }.bind(this));
    return (
      <div className="searchTerms">
      {searchTermNodes}
      </div>
      );
  },
  handle_child_click: function(search_term_clicked) {
    this.setState({selectedSearchTerm:search_term_clicked});
  }
});

module.exports = SearchTermList;