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
        <SearchTerm term={searchTerm.term} key={searchTerm.term} isSelected={searchTerm.term===this.state.selectedSearchTerm}>
        </SearchTerm>
        );
    }.bind(this));
    return (
      <div className="searchTerms" onClick={this.handleClick}>
      {searchTermNodes}
      </div>
      );
  },
  handleClick: function(event) {
    console.log('clicked event was raised', event.target.text)
    this.setState({selectedSearchTerm:event.target.text});
  }
});

module.exports = SearchTermList;