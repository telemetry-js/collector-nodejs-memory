'use strict'

const singleMetric = require('@telemetry-js/metric').single
const match = require('@telemetry-js/match-metric-names')
const EventEmitter = require('events').EventEmitter

const ALL_METRICS = [
  'telemetry.nodejs.memory.rss.bytes',
  'telemetry.nodejs.memory.heap.total.bytes',
  'telemetry.nodejs.memory.heap.used.bytes',
  'telemetry.nodejs.memory.external.bytes'
]

module.exports = function (options) {
  return new MemCollector(options)
}

class MemCollector extends EventEmitter {
  constructor (options) {
    if (!options) options = {}
    super()

    this._metrics = new Set(match(ALL_METRICS, options.metrics))
    this._byteOptions = { unit: 'bytes' }
  }

  // TODO: reuse metric objects between pings
  ping (callback) {
    const mem = process.memoryUsage()

    if (this._metrics.has('telemetry.nodejs.memory.rss.bytes')) {
      const metric = singleMetric('telemetry.nodejs.memory.rss.bytes', this._byteOptions)
      metric.record(mem.rss)
      this.emit('metric', metric)
    }

    if (this._metrics.has('telemetry.nodejs.memory.heap.total.bytes')) {
      const metric = singleMetric('telemetry.nodejs.memory.heap.total.bytes', this._byteOptions)
      metric.record(mem.heapTotal)
      this.emit('metric', metric)
    }

    if (this._metrics.has('telemetry.nodejs.memory.heap.used.bytes')) {
      const metric = singleMetric('telemetry.nodejs.memory.heap.used.bytes', this._byteOptions)
      metric.record(mem.heapUsed)
      this.emit('metric', metric)
    }

    if (this._metrics.has('telemetry.nodejs.memory.external.bytes')) {
      const metric = singleMetric('telemetry.nodejs.memory.external.bytes', this._byteOptions)
      metric.record(mem.external)
      this.emit('metric', metric)
    }

    // No need to dezalgo ping()
    callback()
  }
}
