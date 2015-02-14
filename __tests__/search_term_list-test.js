/** @jsx React.DOM */

jest.dontMock('../js/search_term_list.js');
jest.dontMock('../js/search_term.js');

describe('SearchTermList', function() {
  it('search term list 2 data items', function() {
    var React = require('react/addons');
    var SearchTermList = require('../js/search_term_list.js');

    var TestUtils = React.addons.TestUtils;

    var search_term_list = TestUtils.renderIntoDocument(
      <SearchTermList data={[{term:"abc"},{term:"bcd"}]}/>
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
      search_term_list, 'a');

    expect(buttons.length).toEqual(2);
    expect(buttons[0].getDOMNode().textContent).toEqual('abc');
    expect(buttons[1].getDOMNode().textContent).toEqual('bcd');

    expect(buttons[0].getDOMNode().className).toEqual('btn btn-default');
    expect(buttons[1].getDOMNode().className).toEqual('btn btn-default');
  });

  it('search term list 2 data items first item clicked', function() {
    var React = require('react/addons');
    var SearchTermList = require('../js/search_term_list.js');

    var TestUtils = React.addons.TestUtils;

    var search_term_list = TestUtils.renderIntoDocument(
      <SearchTermList data={[{term:"abc"},{term:"bcd"}]}/>
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
      search_term_list, 'a');

    expect(buttons.length).toEqual(2);

    React.addons.TestUtils.Simulate.click(buttons[0].getDOMNode());

    expect(buttons[0].getDOMNode().className).toEqual('btn btn-default btn-success');
    expect(buttons[1].getDOMNode().className).toEqual('btn btn-default');

  });
  it('search term list 2 data items first item clicked and then second item clicked', function() {
    var React = require('react/addons');
    var SearchTermList = require('../js/search_term_list.js');

    var TestUtils = React.addons.TestUtils;

    var search_term_list = TestUtils.renderIntoDocument(
      <SearchTermList data={[{term:"abc"},{term:"bcd"}]}/>
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
      search_term_list, 'a');

    expect(buttons.length).toEqual(2);

    React.addons.TestUtils.Simulate.click(buttons[0].getDOMNode());

    expect(buttons[0].getDOMNode().className).toEqual('btn btn-default btn-success');
    expect(buttons[1].getDOMNode().className).toEqual('btn btn-default');

    React.addons.TestUtils.Simulate.click(buttons[1].getDOMNode());

    expect(buttons[0].getDOMNode().className).toEqual('btn btn-default');
    expect(buttons[1].getDOMNode().className).toEqual('btn btn-default btn-success');

  });
});