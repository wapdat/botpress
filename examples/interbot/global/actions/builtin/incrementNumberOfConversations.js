//CHECKSUM:8b6453798aca4105779cf4a029eecdefbc3951347e10ead0bc3d4ec0ddbfd3e2
"use strict";

/**
 * Increment the number of conversations
 * @title Increment number of conversations
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} output - The state variable to output the count to
 */
const incrementNumberOfConversations = async output => {
  const userId = event.target;
  const botId = event.botId;
  const key = bp.kvs.getUserStorageKey(userId, 'numberOfConversations');
  let value = await bp.kvs.getStorageWithExpiry(botId, key); // Value could be 0

  if (value === undefined) {
    value = 0;
  } else {
    value++;
  }

  await bp.kvs.setStorageWithExpiry(botId, key, value);
  temp[output] = value;
};

return incrementNumberOfConversations(args.output);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY3JlbWVudE51bWJlck9mQ29udmVyc2F0aW9ucy5qcyJdLCJuYW1lcyI6WyJpbmNyZW1lbnROdW1iZXJPZkNvbnZlcnNhdGlvbnMiLCJvdXRwdXQiLCJ1c2VySWQiLCJldmVudCIsInRhcmdldCIsImJvdElkIiwia2V5IiwiYnAiLCJrdnMiLCJnZXRVc2VyU3RvcmFnZUtleSIsInZhbHVlIiwiZ2V0U3RvcmFnZVdpdGhFeHBpcnkiLCJ1bmRlZmluZWQiLCJzZXRTdG9yYWdlV2l0aEV4cGlyeSIsInRlbXAiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0FBT0EsTUFBTUEsOEJBQThCLEdBQUcsTUFBTUMsTUFBTixJQUFnQjtBQUNyRCxRQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsTUFBckI7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0UsS0FBcEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxpQkFBUCxDQUF5QlAsTUFBekIsRUFBaUMsdUJBQWpDLENBQVo7QUFDQSxNQUFJUSxLQUFLLEdBQUcsTUFBTUgsRUFBRSxDQUFDQyxHQUFILENBQU9HLG9CQUFQLENBQTRCTixLQUE1QixFQUFtQ0MsR0FBbkMsQ0FBbEIsQ0FKcUQsQ0FLckQ7O0FBQ0EsTUFBSUksS0FBSyxLQUFLRSxTQUFkLEVBQXlCO0FBQ3ZCRixJQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNELEdBRkQsTUFFTztBQUNMQSxJQUFBQSxLQUFLO0FBQ047O0FBRUQsUUFBTUgsRUFBRSxDQUFDQyxHQUFILENBQU9LLG9CQUFQLENBQTRCUixLQUE1QixFQUFtQ0MsR0FBbkMsRUFBd0NJLEtBQXhDLENBQU47QUFDQUksRUFBQUEsSUFBSSxDQUFDYixNQUFELENBQUosR0FBZVMsS0FBZjtBQUNELENBZEQ7O0FBZ0JBLE9BQU9WLDhCQUE4QixDQUFDZSxJQUFJLENBQUNkLE1BQU4sQ0FBckMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvYnAvYm90cHJlc3MvbW9kdWxlcy9idWlsdGluL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbmNyZW1lbnQgdGhlIG51bWJlciBvZiBjb252ZXJzYXRpb25zXG4gKiBAdGl0bGUgSW5jcmVtZW50IG51bWJlciBvZiBjb252ZXJzYXRpb25zXG4gKiBAY2F0ZWdvcnkgU3RvcmFnZVxuICogQGF1dGhvciBCb3RwcmVzcywgSW5jLlxuICogQHBhcmFtIHtzdHJpbmd9IG91dHB1dCAtIFRoZSBzdGF0ZSB2YXJpYWJsZSB0byBvdXRwdXQgdGhlIGNvdW50IHRvXG4gKi9cbmNvbnN0IGluY3JlbWVudE51bWJlck9mQ29udmVyc2F0aW9ucyA9IGFzeW5jIG91dHB1dCA9PiB7XG4gIGNvbnN0IHVzZXJJZCA9IGV2ZW50LnRhcmdldFxuICBjb25zdCBib3RJZCA9IGV2ZW50LmJvdElkXG4gIGNvbnN0IGtleSA9IGJwLmt2cy5nZXRVc2VyU3RvcmFnZUtleSh1c2VySWQsICdudW1iZXJPZkNvbnZlcnNhdGlvbnMnKVxuICBsZXQgdmFsdWUgPSBhd2FpdCBicC5rdnMuZ2V0U3RvcmFnZVdpdGhFeHBpcnkoYm90SWQsIGtleSlcbiAgLy8gVmFsdWUgY291bGQgYmUgMFxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gMFxuICB9IGVsc2Uge1xuICAgIHZhbHVlKytcbiAgfVxuXG4gIGF3YWl0IGJwLmt2cy5zZXRTdG9yYWdlV2l0aEV4cGlyeShib3RJZCwga2V5LCB2YWx1ZSlcbiAgdGVtcFtvdXRwdXRdID0gdmFsdWVcbn1cblxucmV0dXJuIGluY3JlbWVudE51bWJlck9mQ29udmVyc2F0aW9ucyhhcmdzLm91dHB1dClcbiJdfQ==