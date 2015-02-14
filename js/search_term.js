/** @jsx React.DOM */

var React = require('react/addons');
var SearchTerm = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'btn': true,
      'btn-default': true,
      'btn-success': this.props.isSelected,
    });
    return (
      <a className={classes} onClick={this.handleClick}>
      {this.props.term}
      </a>
      );
  },
  handleClick: function(event) {
    this.props.parent_click_handler(this.props.term);
  }

});

module.exports = SearchTerm;