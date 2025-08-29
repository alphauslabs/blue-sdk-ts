"use strict";
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.method_signature = exports.oauth_scopes = exports.default_host = exports.file_google_api_client = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/api/client.proto.
 */
exports.file_google_api_client = (0, codegenv2_1.fileDesc)("Chdnb29nbGUvYXBpL2NsaWVudC5wcm90bxIKZ29vZ2xlLmFwaTpDCgxkZWZhdWx0X2hvc3QSHy5nb29nbGUucHJvdG9idWYuU2VydmljZU9wdGlvbnMYmQggASgJUgtkZWZhdWx0SG9zdDpDCgxvYXV0aF9zY29wZXMSHy5nb29nbGUucHJvdG9idWYuU2VydmljZU9wdGlvbnMYmgggASgJUgtvYXV0aFNjb3BlczpKChBtZXRob2Rfc2lnbmF0dXJlEh4uZ29vZ2xlLnByb3RvYnVmLk1ldGhvZE9wdGlvbnMYmwggAygJUg9tZXRob2RTaWduYXR1cmVCaQoOY29tLmdvb2dsZS5hcGlCC0NsaWVudFByb3RvUAFaQWdvb2dsZS5nb2xhbmcub3JnL2dlbnByb3RvL2dvb2dsZWFwaXMvYXBpL2Fubm90YXRpb25zO2Fubm90YXRpb25zogIER0FQSWIGcHJvdG8z", [wkt_1.file_google_protobuf_descriptor]);
/**
 * The hostname for this service.
 * This should be specified with no prefix or protocol.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.default_host) = "foo.googleapi.com";
 *     ...
 *   }
 *
 * @generated from extension: string default_host = 1049;
 */
exports.default_host = (0, codegenv2_1.extDesc)(exports.file_google_api_client, 0);
/**
 * OAuth scopes needed for the client.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform";
 *     ...
 *   }
 *
 * If there is more than one scope, use a comma-separated string:
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform,"
 *       "https://www.googleapis.com/auth/monitoring";
 *     ...
 *   }
 *
 * @generated from extension: string oauth_scopes = 1050;
 */
exports.oauth_scopes = (0, codegenv2_1.extDesc)(exports.file_google_api_client, 1);
/**
 * A definition of a client library method signature.
 *
 * In client libraries, each proto RPC corresponds to one or more methods
 * which the end user is able to call, and calls the underlying RPC.
 * Normally, this method receives a single argument (a struct or instance
 * corresponding to the RPC request object). Defining this field will
 * add one or more overloads providing flattened or simpler method signatures
 * in some languages.
 *
 * The fields on the method signature are provided as a comma-separated
 * string.
 *
 * For example, the proto RPC and annotation:
 *
 *   rpc CreateSubscription(CreateSubscriptionRequest)
 *       returns (Subscription) {
 *     option (google.api.method_signature) = "name,topic";
 *   }
 *
 * Would add the following Java overload (in addition to the method accepting
 * the request object):
 *
 *   public final Subscription createSubscription(String name, String topic)
 *
 * The following backwards-compatibility guidelines apply:
 *
 *   * Adding this annotation to an unannotated method is backwards
 *     compatible.
 *   * Adding this annotation to a method which already has existing
 *     method signature annotations is backwards compatible if and only if
 *     the new method signature annotation is last in the sequence.
 *   * Modifying or removing an existing method signature annotation is
 *     a breaking change.
 *   * Re-ordering existing method signature annotations is a breaking
 *     change.
 *
 * @generated from extension: repeated string method_signature = 1051;
 */
exports.method_signature = (0, codegenv2_1.extDesc)(exports.file_google_api_client, 2);
