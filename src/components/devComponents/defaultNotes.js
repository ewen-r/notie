/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/


/* spellchecker: disable */
/** Dummy note data. */
export const defaultNotes = [
  {
    key: 0,
    id: 0,
    title: "Note 1.",
    content: 'Notes are sorted and displayed according to their title.'
  },
  {
    key: 1,
    id: 1,
    title: "Note 2.",
    content:
      'To mark or un-mark a note as "complete", just click its title or checkbox.',
    completed: false
  },
  {
    key: 2,
    id: 2,
    title: "Note 3.",
    content:
      'Once a nore is marked as "complete", it can be permanently deleted by clicking the "DELETE" button.' +
      'Uncompleted notes cannot be deleted.',
    completed: false
  },
  {
    key: 3,
    id: 3,
    title: "Note 4.",
    content: 'To add a new note.. use the new note panel at the top of the page. ' +
      'Enter a title and some content then click the "CREATE" button. ' +
      'You cannot save your note until it has a title.'
  },
  {
    key: 1,
    id: 4,
    title: "Note 5.",
    content:
      'This is an example of a completed note.',
    completed: true
  }
];
