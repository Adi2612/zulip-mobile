/* @flow strict-local */
import queueMarkAsRead from './queueMarkAsRead';
import checkCompatibility from './checkCompatibility';
import devFetchApiKey from './devFetchApiKey';
import devListUsers from './devListUsers';
import fetchApiKey from './fetchApiKey';
import reportPresence from './reportPresence';
import getTopics from './getTopics';
import toggleMessageStarred from './messages/toggleMessageStarred';
import typing from './typing';
import getAlertWords from './alert_words/getAlertWords';
import pollForEvents from './pollForEvents';
import registerForEvents from './registerForEvents';
import uploadFile from './uploadFile';
import emojiReactionAdd from './emoji_reactions/emojiReactionAdd';
import emojiReactionRemove from './emoji_reactions/emojiReactionRemove';
import markAllAsRead from './mark_as_read/markAllAsRead';
import markStreamAsRead from './mark_as_read/markStreamAsRead';
import markTopicAsRead from './mark_as_read/markTopicAsRead';
import deleteMessage from './messages/deleteMessage';
import getMessageContentById from './messages/getMessageContentById';
import getMessages from './messages/getMessages';
import messagesFlags from './messages/messagesFlags';
import sendMessage from './messages/sendMessage';
import updateMessage from './messages/updateMessage';
import registerPush from './notifications/registerPush';
import unregisterPush from './notifications/unregisterPush';
import getRealmEmojis from './realm/getRealmEmojis';
import getRealmFilters from './realm/getRealmFilters';
import getServerSettings from './settings/getServerSettings';
import toggleMobilePushSettings from './settings/toggleMobilePushSettings';
import createStream from './streams/createStream';
import deleteStream from './streams/deleteStream';
import getStreams from './streams/getStreams';
import updateStream from './streams/updateStream';
import getSubscriptions from './subscriptions/getSubscriptions';
import muteTopic from './subscriptions/muteTopic';
import subscriptionAdd from './subscriptions/subscriptionAdd';
import subscriptionRemove from './subscriptions/subscriptionRemove';
import toggleMuteStream from './subscriptions/toggleMuteStream';
import togglePinStream from './subscriptions/togglePinStream';
import unmuteTopic from './subscriptions/unmuteTopic';
import createUserGroup from './user_groups/createUserGroup';
import deleteUserGroup from './user_groups/deleteUserGroup';
import editUserGroup from './user_groups/editUserGroup';
import editUserGroupMembers from './user_groups/editUserGroupMembers';
import getUserGroupById from './user_groups/getUserGroupById';
import getUserGroups from './user_groups/getUserGroups';
import getUsers from './users/getUsers';

export {
  queueMarkAsRead,
  checkCompatibility,
  devFetchApiKey,
  devListUsers,
  fetchApiKey,
  reportPresence,
  getTopics,
  toggleMessageStarred,
  typing,
  getAlertWords,
  pollForEvents,
  registerForEvents,
  uploadFile,
  emojiReactionAdd,
  emojiReactionRemove,
  markAllAsRead,
  markStreamAsRead,
  markTopicAsRead,
  deleteMessage,
  getMessageContentById,
  getMessages,
  messagesFlags,
  sendMessage,
  updateMessage,
  registerPush,
  unregisterPush,
  getRealmEmojis,
  getRealmFilters,
  getServerSettings,
  toggleMobilePushSettings,
  createStream,
  deleteStream,
  getStreams,
  updateStream,
  getSubscriptions,
  muteTopic,
  subscriptionAdd,
  subscriptionRemove,
  toggleMuteStream,
  togglePinStream,
  unmuteTopic,
  createUserGroup,
  deleteUserGroup,
  editUserGroup,
  editUserGroupMembers,
  getUserGroupById,
  getUserGroups,
  getUsers,
};

export default {
  queueMarkAsRead,
  checkCompatibility,
  devFetchApiKey,
  devListUsers,
  fetchApiKey,
  reportPresence,
  getTopics,
  toggleMessageStarred,
  typing,
  getAlertWords,
  pollForEvents,
  registerForEvents,
  uploadFile,
  emojiReactionAdd,
  emojiReactionRemove,
  markAllAsRead,
  markStreamAsRead,
  markTopicAsRead,
  deleteMessage,
  getMessageContentById,
  getMessages,
  messagesFlags,
  sendMessage,
  updateMessage,
  registerPush,
  unregisterPush,
  getRealmEmojis,
  getRealmFilters,
  getServerSettings,
  toggleMobilePushSettings,
  createStream,
  deleteStream,
  getStreams,
  updateStream,
  getSubscriptions,
  muteTopic,
  subscriptionAdd,
  subscriptionRemove,
  toggleMuteStream,
  togglePinStream,
  unmuteTopic,
  createUserGroup,
  deleteUserGroup,
  editUserGroup,
  editUserGroupMembers,
  getUserGroupById,
  getUserGroups,
  getUsers,
};
