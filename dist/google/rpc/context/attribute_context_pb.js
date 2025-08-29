"use strict";
// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeContext_ResourceSchema = exports.AttributeContext_ResponseSchema = exports.AttributeContext_RequestSchema = exports.AttributeContext_AuthSchema = exports.AttributeContext_ApiSchema = exports.AttributeContext_PeerSchema = exports.AttributeContextSchema = exports.file_google_rpc_context_attribute_context = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/rpc/context/attribute_context.proto.
 */
exports.file_google_rpc_context_attribute_context = (0, codegenv2_1.fileDesc)("Cipnb29nbGUvcnBjL2NvbnRleHQvYXR0cmlidXRlX2NvbnRleHQucHJvdG8SEmdvb2dsZS5ycGMuY29udGV4dCLGDAoQQXR0cmlidXRlQ29udGV4dBI5CgZvcmlnaW4YByABKAsyKS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyEjkKBnNvdXJjZRgBIAEoCzIpLmdvb2dsZS5ycGMuY29udGV4dC5BdHRyaWJ1dGVDb250ZXh0LlBlZXISPgoLZGVzdGluYXRpb24YAiABKAsyKS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyEj0KB3JlcXVlc3QYAyABKAsyLC5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXF1ZXN0Ej8KCHJlc3BvbnNlGAQgASgLMi0uZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuUmVzcG9uc2USPwoIcmVzb3VyY2UYBSABKAsyLS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNvdXJjZRI1CgNhcGkYBiABKAsyKC5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5BcGkavgEKBFBlZXISCgoCaXAYASABKAkSDAoEcG9ydBgCIAEoAxJFCgZsYWJlbHMYBiADKAsyNS5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5QZWVyLkxhYmVsc0VudHJ5EhEKCXByaW5jaXBhbBgHIAEoCRITCgtyZWdpb25fY29kZRgIIAEoCRotCgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGkwKA0FwaRIPCgdzZXJ2aWNlGAEgASgJEhEKCW9wZXJhdGlvbhgCIAEoCRIQCghwcm90b2NvbBgDIAEoCRIPCgd2ZXJzaW9uGAQgASgJGn8KBEF1dGgSEQoJcHJpbmNpcGFsGAEgASgJEhEKCWF1ZGllbmNlcxgCIAMoCRIRCglwcmVzZW50ZXIYAyABKAkSJwoGY2xhaW1zGAQgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBIVCg1hY2Nlc3NfbGV2ZWxzGAUgAygJGu8CCgdSZXF1ZXN0EgoKAmlkGAEgASgJEg4KBm1ldGhvZBgCIAEoCRJKCgdoZWFkZXJzGAMgAygLMjkuZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuUmVxdWVzdC5IZWFkZXJzRW50cnkSDAoEcGF0aBgEIAEoCRIMCgRob3N0GAUgASgJEg4KBnNjaGVtZRgGIAEoCRINCgVxdWVyeRgHIAEoCRIoCgR0aW1lGAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRzaXplGAogASgDEhAKCHByb3RvY29sGAsgASgJEg4KBnJlYXNvbhgMIAEoCRI3CgRhdXRoGA0gASgLMikuZ29vZ2xlLnJwYy5jb250ZXh0LkF0dHJpYnV0ZUNvbnRleHQuQXV0aBouCgxIZWFkZXJzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ARrNAQoIUmVzcG9uc2USDAoEY29kZRgBIAEoAxIMCgRzaXplGAIgASgDEksKB2hlYWRlcnMYAyADKAsyOi5nb29nbGUucnBjLmNvbnRleHQuQXR0cmlidXRlQ29udGV4dC5SZXNwb25zZS5IZWFkZXJzRW50cnkSKAoEdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAaLgoMSGVhZGVyc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEasQEKCFJlc291cmNlEg8KB3NlcnZpY2UYASABKAkSDAoEbmFtZRgCIAEoCRIMCgR0eXBlGAMgASgJEkkKBmxhYmVscxgEIAMoCzI5Lmdvb2dsZS5ycGMuY29udGV4dC5BdHRyaWJ1dGVDb250ZXh0LlJlc291cmNlLkxhYmVsc0VudHJ5Gi0KC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAFCiwEKFmNvbS5nb29nbGUucnBjLmNvbnRleHRCFUF0dHJpYnV0ZUNvbnRleHRQcm90b1ABWlVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL3JwYy9jb250ZXh0L2F0dHJpYnV0ZV9jb250ZXh0O2F0dHJpYnV0ZV9jb250ZXh0+AEBYgZwcm90bzM", [wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_timestamp]);
/**
 * Describes the message google.rpc.context.AttributeContext.
 * Use `create(AttributeContextSchema)` to create a new message.
 */
exports.AttributeContextSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0);
/**
 * Describes the message google.rpc.context.AttributeContext.Peer.
 * Use `create(AttributeContext_PeerSchema)` to create a new message.
 */
exports.AttributeContext_PeerSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 0);
/**
 * Describes the message google.rpc.context.AttributeContext.Api.
 * Use `create(AttributeContext_ApiSchema)` to create a new message.
 */
exports.AttributeContext_ApiSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 1);
/**
 * Describes the message google.rpc.context.AttributeContext.Auth.
 * Use `create(AttributeContext_AuthSchema)` to create a new message.
 */
exports.AttributeContext_AuthSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 2);
/**
 * Describes the message google.rpc.context.AttributeContext.Request.
 * Use `create(AttributeContext_RequestSchema)` to create a new message.
 */
exports.AttributeContext_RequestSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 3);
/**
 * Describes the message google.rpc.context.AttributeContext.Response.
 * Use `create(AttributeContext_ResponseSchema)` to create a new message.
 */
exports.AttributeContext_ResponseSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 4);
/**
 * Describes the message google.rpc.context.AttributeContext.Resource.
 * Use `create(AttributeContext_ResourceSchema)` to create a new message.
 */
exports.AttributeContext_ResourceSchema = (0, codegenv2_1.messageDesc)(exports.file_google_rpc_context_attribute_context, 0, 5);
