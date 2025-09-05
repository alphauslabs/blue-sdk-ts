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
exports.MetricSchema = exports.MetricDescriptor_ValueTypeSchema = exports.MetricDescriptor_ValueType = exports.MetricDescriptor_MetricKindSchema = exports.MetricDescriptor_MetricKind = exports.MetricDescriptorSchema = exports.file_google_api_metric = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const label_pb_1 = require("./label_pb");
/**
 * Describes the file google/api/metric.proto.
 */
exports.file_google_api_metric = (0, codegenv2_1.fileDesc)("Chdnb29nbGUvYXBpL21ldHJpYy5wcm90bxIKZ29vZ2xlLmFwaSLSAwoQTWV0cmljRGVzY3JpcHRvchIMCgRuYW1lGAEgASgJEgwKBHR5cGUYCCABKAkSKwoGbGFiZWxzGAIgAygLMhsuZ29vZ2xlLmFwaS5MYWJlbERlc2NyaXB0b3ISPAoLbWV0cmljX2tpbmQYAyABKA4yJy5nb29nbGUuYXBpLk1ldHJpY0Rlc2NyaXB0b3IuTWV0cmljS2luZBI6Cgp2YWx1ZV90eXBlGAQgASgOMiYuZ29vZ2xlLmFwaS5NZXRyaWNEZXNjcmlwdG9yLlZhbHVlVHlwZRIMCgR1bml0GAUgASgJEhMKC2Rlc2NyaXB0aW9uGAYgASgJEhQKDGRpc3BsYXlfbmFtZRgHIAEoCSJPCgpNZXRyaWNLaW5kEhsKF01FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEEAASCQoFR0FVR0UQARIJCgVERUxUQRACEg4KCkNVTVVMQVRJVkUQAyJxCglWYWx1ZVR5cGUSGgoWVkFMVUVfVFlQRV9VTlNQRUNJRklFRBAAEggKBEJPT0wQARIJCgVJTlQ2NBACEgoKBkRPVUJMRRADEgoKBlNUUklORxAEEhAKDERJU1RSSUJVVElPThAFEgkKBU1PTkVZEAYidQoGTWV0cmljEgwKBHR5cGUYAyABKAkSLgoGbGFiZWxzGAIgAygLMh4uZ29vZ2xlLmFwaS5NZXRyaWMuTGFiZWxzRW50cnkaLQoLTGFiZWxzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUJfCg5jb20uZ29vZ2xlLmFwaUILTWV0cmljUHJvdG9QAVo3Z29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvbWV0cmljO21ldHJpY6ICBEdBUEliBnByb3RvMw", [label_pb_1.file_google_api_label]);
/**
 * Describes the message google.api.MetricDescriptor.
 * Use `create(MetricDescriptorSchema)` to create a new message.
 */
exports.MetricDescriptorSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_metric, 0);
/**
 * The kind of measurement. It describes how the data is reported.
 *
 * @generated from enum google.api.MetricDescriptor.MetricKind
 */
var MetricDescriptor_MetricKind;
(function (MetricDescriptor_MetricKind) {
    /**
     * Do not use this default value.
     *
     * @generated from enum value: METRIC_KIND_UNSPECIFIED = 0;
     */
    MetricDescriptor_MetricKind[MetricDescriptor_MetricKind["METRIC_KIND_UNSPECIFIED"] = 0] = "METRIC_KIND_UNSPECIFIED";
    /**
     * An instantaneous measurement of a value.
     *
     * @generated from enum value: GAUGE = 1;
     */
    MetricDescriptor_MetricKind[MetricDescriptor_MetricKind["GAUGE"] = 1] = "GAUGE";
    /**
     * The change in a value during a time interval.
     *
     * @generated from enum value: DELTA = 2;
     */
    MetricDescriptor_MetricKind[MetricDescriptor_MetricKind["DELTA"] = 2] = "DELTA";
    /**
     * A value accumulated over a time interval.  Cumulative
     * measurements in a time series should have the same start time
     * and increasing end times, until an event resets the cumulative
     * value to zero and sets a new start time for the following
     * points.
     *
     * @generated from enum value: CUMULATIVE = 3;
     */
    MetricDescriptor_MetricKind[MetricDescriptor_MetricKind["CUMULATIVE"] = 3] = "CUMULATIVE";
})(MetricDescriptor_MetricKind || (exports.MetricDescriptor_MetricKind = MetricDescriptor_MetricKind = {}));
/**
 * Describes the enum google.api.MetricDescriptor.MetricKind.
 */
exports.MetricDescriptor_MetricKindSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_metric, 0, 0);
/**
 * The value type of a metric.
 *
 * @generated from enum google.api.MetricDescriptor.ValueType
 */
var MetricDescriptor_ValueType;
(function (MetricDescriptor_ValueType) {
    /**
     * Do not use this default value.
     *
     * @generated from enum value: VALUE_TYPE_UNSPECIFIED = 0;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["VALUE_TYPE_UNSPECIFIED"] = 0] = "VALUE_TYPE_UNSPECIFIED";
    /**
     * The value is a boolean.
     * This value type can be used only if the metric kind is `GAUGE`.
     *
     * @generated from enum value: BOOL = 1;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["BOOL"] = 1] = "BOOL";
    /**
     * The value is a signed 64-bit integer.
     *
     * @generated from enum value: INT64 = 2;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["INT64"] = 2] = "INT64";
    /**
     * The value is a double precision floating point number.
     *
     * @generated from enum value: DOUBLE = 3;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["DOUBLE"] = 3] = "DOUBLE";
    /**
     * The value is a text string.
     * This value type can be used only if the metric kind is `GAUGE`.
     *
     * @generated from enum value: STRING = 4;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["STRING"] = 4] = "STRING";
    /**
     * The value is a [`Distribution`][google.api.Distribution].
     *
     * @generated from enum value: DISTRIBUTION = 5;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["DISTRIBUTION"] = 5] = "DISTRIBUTION";
    /**
     * The value is money.
     *
     * @generated from enum value: MONEY = 6;
     */
    MetricDescriptor_ValueType[MetricDescriptor_ValueType["MONEY"] = 6] = "MONEY";
})(MetricDescriptor_ValueType || (exports.MetricDescriptor_ValueType = MetricDescriptor_ValueType = {}));
/**
 * Describes the enum google.api.MetricDescriptor.ValueType.
 */
exports.MetricDescriptor_ValueTypeSchema = (0, codegenv2_1.enumDesc)(exports.file_google_api_metric, 0, 1);
/**
 * Describes the message google.api.Metric.
 * Use `create(MetricSchema)` to create a new message.
 */
exports.MetricSchema = (0, codegenv2_1.messageDesc)(exports.file_google_api_metric, 1);
