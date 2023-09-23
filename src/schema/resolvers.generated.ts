/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { publishPost as Mutation_publishPost } from './post/resolvers/Mutation/publishPost';
import    { Post } from './post/resolvers/Post';
import    { post as Query_post } from './post/resolvers/Query/post';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { post: Query_post,user: Query_user,users: Query_users },
      Mutation: { publishPost: Mutation_publishPost },
      
      Post: Post,
User: User
    }