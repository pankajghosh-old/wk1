/** @jsx React.DOM */

jest.dontMock('../js/search_term.js');
describe('SearchTerm', function() {
  it('button class if not selected', function() {
    var React = require('react/addons');
    var SearchTerm = require('../js/search_term.js');
    var TestUtils = React.addons.TestUtils;

    var search_term = TestUtils.renderIntoDocument(
      <SearchTerm term="term1" key="term1" isSelected={false}/>
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(
      search_term, 'a');
    expect(button.getDOMNode().textContent).toEqual('term1');

    expect(button.getDOMNode().className).toEqual('btn btn-default');
  });
  it('button class if selected', function() {
    var React = require('react/addons');
    var SearchTerm = require('../js/search_term.js');
    var TestUtils = React.addons.TestUtils;

    var search_term = TestUtils.renderIntoDocument(
      <SearchTerm term="term1" key="term1" isSelected={true}/>
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(
      search_term, 'a');
    expect(button.getDOMNode().textContent).toEqual('term1');

    expect(button.getDOMNode().className).toEqual('btn btn-default btn-success');
  });
});