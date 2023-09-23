import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":0,"end":10}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":17,"end":25}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":12,"end":25}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":38,"end":43}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"post","loc":{"start":48,"end":52}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":53,"end":55}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":57,"end":59}},"loc":{"start":57,"end":59}},"loc":{"start":57,"end":60}},"directives":[],"loc":{"start":53,"end":60}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post","loc":{"start":63,"end":67}},"loc":{"start":63,"end":67}},"directives":[],"loc":{"start":48,"end":67}}],"loc":{"start":26,"end":69}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":83,"end":91}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"publishPost","loc":{"start":96,"end":107}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":108,"end":110}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":112,"end":114}},"loc":{"start":112,"end":114}},"loc":{"start":112,"end":115}},"directives":[],"loc":{"start":108,"end":115}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post","loc":{"start":118,"end":122}},"loc":{"start":118,"end":122}},"directives":[],"loc":{"start":96,"end":122}}],"loc":{"start":71,"end":124}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Post","loc":{"start":131,"end":135}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":140,"end":142}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":144,"end":146}},"loc":{"start":144,"end":146}},"loc":{"start":144,"end":147}},"directives":[],"loc":{"start":140,"end":147}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":150,"end":155}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":157,"end":163}},"loc":{"start":157,"end":163}},"loc":{"start":157,"end":164}},"directives":[],"loc":{"start":150,"end":164}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"content","loc":{"start":167,"end":174}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":176,"end":182}},"loc":{"start":176,"end":182}},"directives":[],"loc":{"start":167,"end":182}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"published","loc":{"start":185,"end":194}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":196,"end":203}},"loc":{"start":196,"end":203}},"loc":{"start":196,"end":204}},"directives":[],"loc":{"start":185,"end":204}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"author","loc":{"start":207,"end":213}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":215,"end":219}},"loc":{"start":215,"end":219}},"loc":{"start":215,"end":220}},"directives":[],"loc":{"start":207,"end":220}}],"loc":{"start":126,"end":222}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":228,"end":232}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":237,"end":239}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":241,"end":243}},"loc":{"start":241,"end":243}},"loc":{"start":241,"end":244}},"directives":[],"loc":{"start":237,"end":244}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"fullName","loc":{"start":247,"end":255}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":257,"end":263}},"loc":{"start":257,"end":263}},"loc":{"start":257,"end":264}},"directives":[],"loc":{"start":247,"end":264}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"posts","loc":{"start":267,"end":272}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Post","loc":{"start":275,"end":279}},"loc":{"start":275,"end":279}},"loc":{"start":275,"end":280}},"loc":{"start":274,"end":281}},"loc":{"start":274,"end":282}},"directives":[],"loc":{"start":267,"end":282}}],"loc":{"start":223,"end":284}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":298,"end":303}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":308,"end":312}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":313,"end":315}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":317,"end":319}},"loc":{"start":317,"end":319}},"loc":{"start":317,"end":320}},"directives":[],"loc":{"start":313,"end":320}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":323,"end":327}},"loc":{"start":323,"end":327}},"loc":{"start":323,"end":328}},"directives":[],"loc":{"start":308,"end":328}}],"loc":{"start":286,"end":330}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":344,"end":349}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"users","loc":{"start":354,"end":359}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":362,"end":366}},"loc":{"start":362,"end":366}},"loc":{"start":362,"end":367}},"loc":{"start":361,"end":368}},"loc":{"start":361,"end":369}},"directives":[],"loc":{"start":354,"end":369}}],"loc":{"start":332,"end":371}}],"loc":{"start":0,"end":372}} as unknown as DocumentNode