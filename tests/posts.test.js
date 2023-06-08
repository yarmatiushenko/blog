const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this should be your Post model
const Post = require("../models/post");

const moment = require('moment');

const date = moment();
const formattedDate = date.format('ddd, MMM Do, YYYY');
  

describe('Post Model Test', () => {
  let post;

  // it's just a few tests, so setup here is fine
  beforeAll(() => {
    post = new Post({
      title: 'Test Title',
      description: 'Test Description',
      body: 'Test Body',
      author: 'Test Author',
    });
  });

  test('publishedAt returns a correctly formatted date', () => {
    const expectedFormat = formattedDate; /* Your expected date format here */;
    expect(post.publishedAt).toBe(expectedFormat);
  });

  test('publishedSince returns a correct "fromNow" string', () => {
    const expectedFromNowString = 'a few seconds ago'; /* Your expected "fromNow" string here */;
    expect(post.publishedSince).toBe(expectedFromNowString);
  });
});