"use strict";
// Copyright 2018 Google LLC.
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
exports.Billing_BillingDestinationSchema = exports.BillingSchema = exports.file_google_api_billing = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const annotations_pb_1 = require("./annotations_pb");
/**
 * Describes the file google/api/billing.proto.
 */
exports.file_google_api_billing = (0, codegenv2_1.fileDesc)("Chhnb29nbGUvYXBpL2JpbGxpbmcucHJvdG8SCmdvb2dsZS5hcGkikwEKB0JpbGxpbmcSRQoVY29uc3VtZXJfZGVzdGluYXRpb25zGAggAygLMiYuZ29vZ2xlLmFwaS5CaWxsaW5nLkJpbGxpbmdEZXN0aW5hdGlvbhpBChJCaWxsaW5nRGVzdGluYXRpb24SGgoSbW9uaXRvcmVkX3Jlc291cmNlGAEgASgJEg8KB21ldHJpY3MYAiADKAlCbgoOY29tLmdvb2dsZS5hcGlCDEJpbGxpbmdQcm90b1ABWkVnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9zZXJ2aWNlY29uZmlnO3NlcnZpY2Vjb25maWeiAgRHQVBJYgZwcm90bzM", [annotations_pb_1.file_google_api_annotations]);
/**
 * Describes the message google.api.Billing.
 * Use `create(BillingSchema)` to create a new message.
 */
exports.BillingSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_billing, 0);
/**
 * Describes the message google.api.Billing.BillingDestination.
 * Use `create(Billing_BillingDestinationSchema)` to create a new message.
 */
exports.Billing_BillingDestinationSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_billing, 0, 0);
