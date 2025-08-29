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
exports.resource = exports.resource_definition = exports.resource_reference = exports.ResourceReferenceSchema = exports.ResourceDescriptor_StyleSchema = exports.ResourceDescriptor_Style = exports.ResourceDescriptor_HistorySchema = exports.ResourceDescriptor_History = exports.ResourceDescriptorSchema = exports.file_google_api_resource = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const wkt_1 = require("@bufbuild/protobuf/wkt");
/**
 * Describes the file google/api/resource.proto.
 */
exports.file_google_api_resource = (0, codegenv2_1.fileDesc)("Chlnb29nbGUvYXBpL3Jlc291cmNlLnByb3RvEgpnb29nbGUuYXBpIu4CChJSZXNvdXJjZURlc2NyaXB0b3ISDAoEdHlwZRgBIAEoCRIPCgdwYXR0ZXJuGAIgAygJEhIKCm5hbWVfZmllbGQYAyABKAkSNwoHaGlzdG9yeRgEIAEoDjImLmdvb2dsZS5hcGkuUmVzb3VyY2VEZXNjcmlwdG9yLkhpc3RvcnkSDgoGcGx1cmFsGAUgASgJEhAKCHNpbmd1bGFyGAYgASgJEjMKBXN0eWxlGAogAygOMiQuZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3IuU3R5bGUiWwoHSGlzdG9yeRIXChNISVNUT1JZX1VOU1BFQ0lGSUVEEAASHQoZT1JJR0lOQUxMWV9TSU5HTEVfUEFUVEVSThABEhgKFEZVVFVSRV9NVUxUSV9QQVRURVJOEAIiOAoFU3R5bGUSFQoRU1RZTEVfVU5TUEVDSUZJRUQQABIYChRERUNMQVJBVElWRV9GUklFTkRMWRABIjUKEVJlc291cmNlUmVmZXJlbmNlEgwKBHR5cGUYASABKAkSEgoKY2hpbGRfdHlwZRgCIAEoCTpsChJyZXNvdXJjZV9yZWZlcmVuY2USHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJ8IIAEoCzIdLmdvb2dsZS5hcGkuUmVzb3VyY2VSZWZlcmVuY2VSEXJlc291cmNlUmVmZXJlbmNlOm4KE3Jlc291cmNlX2RlZmluaXRpb24SHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYnQggAygLMh4uZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3JSEnJlc291cmNlRGVmaW5pdGlvbjpcCghyZXNvdXJjZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxidCCABKAsyHi5nb29nbGUuYXBpLlJlc291cmNlRGVzY3JpcHRvclIIcmVzb3VyY2VCbgoOY29tLmdvb2dsZS5hcGlCDVJlc291cmNlUHJvdG9QAVpBZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvYW5ub3RhdGlvbnM7YW5ub3RhdGlvbnP4AQGiAgRHQVBJYgZwcm90bzM", [wkt_1.file_google_protobuf_descriptor]);
/**
 * Describes the message google.api.ResourceDescriptor.
 * Use `create(ResourceDescriptorSchema)` to create a new message.
 */
exports.ResourceDescriptorSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_resource, 0);
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 *
 * @generated from enum google.api.ResourceDescriptor.History
 */
var ResourceDescriptor_History;
(function (ResourceDescriptor_History) {
    /**
     * The "unset" value.
     *
     * @generated from enum value: HISTORY_UNSPECIFIED = 0;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["HISTORY_UNSPECIFIED"] = 0] = "HISTORY_UNSPECIFIED";
    /**
     * The resource originally had one pattern and launched as such, and
     * additional patterns were added later.
     *
     * @generated from enum value: ORIGINALLY_SINGLE_PATTERN = 1;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["ORIGINALLY_SINGLE_PATTERN"] = 1] = "ORIGINALLY_SINGLE_PATTERN";
    /**
     * The resource has one pattern, but the API owner expects to add more
     * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
     * that from being necessary once there are multiple patterns.)
     *
     * @generated from enum value: FUTURE_MULTI_PATTERN = 2;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["FUTURE_MULTI_PATTERN"] = 2] = "FUTURE_MULTI_PATTERN";
})(ResourceDescriptor_History || (exports.ResourceDescriptor_History = ResourceDescriptor_History = {}));
/**
 * Describes the enum google.api.ResourceDescriptor.History.
 */
exports.ResourceDescriptor_HistorySchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_resource, 0, 0);
/**
 * A flag representing a specific style that a resource claims to conform to.
 *
 * @generated from enum google.api.ResourceDescriptor.Style
 */
var ResourceDescriptor_Style;
(function (ResourceDescriptor_Style) {
    /**
     * The unspecified value. Do not use.
     *
     * @generated from enum value: STYLE_UNSPECIFIED = 0;
     */
    ResourceDescriptor_Style[ResourceDescriptor_Style["STYLE_UNSPECIFIED"] = 0] = "STYLE_UNSPECIFIED";
    /**
     * This resource is intended to be "declarative-friendly".
     *
     * Declarative-friendly resources must be more strictly consistent, and
     * setting this to true communicates to tools that this resource should
     * adhere to declarative-friendly expectations.
     *
     * Note: This is used by the API linter (linter.aip.dev) to enable
     * additional checks.
     *
     * @generated from enum value: DECLARATIVE_FRIENDLY = 1;
     */
    ResourceDescriptor_Style[ResourceDescriptor_Style["DECLARATIVE_FRIENDLY"] = 1] = "DECLARATIVE_FRIENDLY";
})(ResourceDescriptor_Style || (exports.ResourceDescriptor_Style = ResourceDescriptor_Style = {}));
/**
 * Describes the enum google.api.ResourceDescriptor.Style.
 */
exports.ResourceDescriptor_StyleSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_resource, 0, 1);
/**
 * Describes the message google.api.ResourceReference.
 * Use `create(ResourceReferenceSchema)` to create a new message.
 */
exports.ResourceReferenceSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_resource, 1);
/**
 * An annotation that describes a resource reference, see
 * [ResourceReference][].
 *
 * @generated from extension: google.api.ResourceReference resource_reference = 1055;
 */
exports.resource_reference = (0, codegenv2_1.extDesc)(exports.file_google_api_resource, 0);
/**
 * An annotation that describes a resource definition without a corresponding
 * message; see [ResourceDescriptor][].
 *
 * @generated from extension: repeated google.api.ResourceDescriptor resource_definition = 1053;
 */
exports.resource_definition = (0, codegenv2_1.extDesc)(exports.file_google_api_resource, 1);
/**
 * An annotation that describes a resource definition, see
 * [ResourceDescriptor][].
 *
 * @generated from extension: google.api.ResourceDescriptor resource = 1053;
 */
exports.resource = (0, codegenv2_1.extDesc)(exports.file_google_api_resource, 2);
