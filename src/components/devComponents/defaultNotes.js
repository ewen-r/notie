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
    title: "1. Adding new notes",
    content:
      'To add a new note, use the panel on the left.' +
      '  Enter a title and some content then click the "add" button.' +
      '  You cannot save a note without a title.',
    completed: false
  },
  {
    key: 1,
    id: 1,
    title: "2. Notes display",
    content:
      'Notes are sorted and displayed according to their title.',
    completed: false
  },
  {
    key: 2,
    id: 2,
    title: "3. Completing a note",
    content:
      'Click the "done" button mark a note completed.' +
      '  Click the "done" button again to mark the note as incomplete.',
    completed: false
  },
  {
    key: 3,
    id: 3,
    title: "4. Deleting a notes",
    content: 'Once a note is marked as "completed",' +
      ' it can be permanently deleted by clicking the "delete" button.' +
      '  Uncompleted notes cannot be deleted.'
  },
  {
    key: 1,
    id: 4,
    title: "5. Test note",
    content:
      'This is an example of a completed note.',
    completed: true
  }
];
