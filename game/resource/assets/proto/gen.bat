pbjs -t static-module -w closure -o protocol.js game_type.proto game_def.proto client_msg.proto
pbts -o protocol.d.ts protocol.js