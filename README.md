#Introduction
>>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.On 7 November 2018, the GraphQL project was moved from Facebook to the newly-established GraphQL Foundation, hosted by the non-profit Linux Foundation.Since 2012, GraphQL's rise has followed the adoption timeline as set out by Lee Byron, GraphQL's creator, with surprising accuracy.


###What is GraphQL?
GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
* Query language
GraphQL as a query language seems reasonable—"QL" seemed important enough to be in the name, after all. But what are we querying? It probably helps to look at a sample query request and the corresponding response.
The following user query:

>{
 user(id: 4) {
   name
   email
   phoneNumber
 }
}

might return the following JSON response:

>{
 "user": {
   "name": "Zach Lendon"
   “email”: “zach@hydrate.io”
   “phoneNumber”: “867-5309”
 }
}

Imagine a client application querying for user details, taking the result, and using it to populate a profile screen. As a query language, one of GraphQL's core benefits is that a client application can request only the data it needs and expect it to be returned in a consistent manner.
* Execution engine
![alt text](image/graphql-execution-engine.png "execution engine")
The GraphQL execution engine is what is responsible for processing a GraphQL query and returning a JSON response. All GraphQL servers are made up of two core components that define the structure and behavior of the execution engine: a schema and resolvers, respectively.

###GraphQL Schema
A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

##Resolvers
Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below −
>fieldName:(root, args, context, info) => { result }
* **Query :-** A GraphQL operation can either be a read or a write operation. A GraphQL query is used to read or fetch values while a mutation is used to write or post values. In either case, the operation is a simple string that a GraphQL server can parse and respond to with data in a specific format. The popular response format that is usually used for mobile and web applications is JSON.
The syntax to define a query is as follows −

>//syntax 1
query query_name{ someField }

>//syntax 2
{ someField } 
* **Mutation :-** Mutation queries modify data in the data store and returns a value. It can be used to insert, update, or delete data. Mutations are defined as a part of the schema.
The syntax of a mutation query is given below −

>mutation{
   someEditOperation(dataField:"valueOfField"):returnType
}
* **Subscription:-** Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens. Subscriptions are usually implemented with WebSockets. In that setup, the server maintains a steady connection to its subscribed client. This also breaks the “Request-Response-Cycle” that were used for all previous interactions with the API.
  
#####For more details [click me](https://graphql.org/learn/)  



