Store = require 'fluxible/addons/BaseStore'

class StopDeparturesStore extends Store
  @storeName: 'StopDeparturesStore'

  constructor: (dispatcher) ->
    super(dispatcher)
    @departures = {}

  getDepartures: (id) =>
    @departures[id]

  startStopDeparturesFetch: (id) ->
    @departures[id] = false

  storeStopDepartures: (data) ->
    deps = []
    for departure in data.departures
      for time in departure.times
        deps.push
          time: time
          pattern: departure.pattern
    deps.sort (a,b) ->
      if a.time.serviceDay + a.time.realtimeDeparture > b.time.serviceDay + b.time.realtimeDeparture then 1 else -1
    @departures[data.id] = deps
    @emitChange(data.id)

  @handlers:
    "StopDeparturesFound": 'storeStopDepartures'
    "StopDeparturesFetchStarted": 'startStopDeparturesFetch'

module.exports = StopDeparturesStore