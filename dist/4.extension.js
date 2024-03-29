"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrows: () => (/* binding */ arrows),
/* harmony export */   setArrows: () => (/* binding */ setArrows)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);




var arrows = {
  normal,
  vee,
  undirected,
};

function setArrows(value) {
  arrows = value;
}

function normal(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  _util_js__WEBPACK_IMPORTED_MODULE_0__.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function vee(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 0 L 10 5 L 0 10 L 4 5 z')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  _util_js__WEBPACK_IMPORTED_MODULE_0__.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}

function undirected(parent, id, edge, type) {
  var marker = parent
    .append('marker')
    .attr('id', id)
    .attr('viewBox', '0 0 10 10')
    .attr('refX', 9)
    .attr('refY', 5)
    .attr('markerUnits', 'strokeWidth')
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto');

  var path = marker
    .append('path')
    .attr('d', 'M 0 5 L 10 5')
    .style('stroke-width', 1)
    .style('stroke-dasharray', '1,0');
  _util_js__WEBPACK_IMPORTED_MODULE_0__.applyStyle(path, edge[type + 'Style']);
  if (edge[type + 'Class']) {
    path.attr('class', edge[type + 'Class']);
  }
}


/***/ }),

/***/ 892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClusters: () => (/* binding */ createClusters),
/* harmony export */   setCreateClusters: () => (/* binding */ setCreateClusters)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _label_add_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(893);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);






var createClusters = function (selection, g) {
  var clusters = g.nodes().filter(function (v) {
    return _util_js__WEBPACK_IMPORTED_MODULE_2__.isSubgraph(g, v);
  });
  var svgClusters = selection.selectAll('g.cluster').data(clusters, function (v) {
    return v;
  });

  _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(svgClusters.exit(), g).style('opacity', 0).remove();

  var enterSelection = svgClusters
    .enter()
    .append('g')
    .attr('class', 'cluster')
    .attr('id', function (v) {
      var node = g.node(v);
      return node.id;
    })
    .style('opacity', 0)
    .each(function (v) {
      var node = g.node(v);
      var thisGroup = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
      d3__WEBPACK_IMPORTED_MODULE_0__.select(this).append('rect');
      var labelGroup = thisGroup.append('g').attr('class', 'label');
      (0,_label_add_label_js__WEBPACK_IMPORTED_MODULE_1__.addLabel)(labelGroup, node, node.clusterLabelPos);
    });

  svgClusters = svgClusters.merge(enterSelection);

  svgClusters = _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(svgClusters, g).style('opacity', 1);

  svgClusters.selectAll('rect').each(function (c) {
    var node = g.node(c);
    var domCluster = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyStyle(domCluster, node.style);
  });

  return svgClusters;
};

function setCreateClusters(value) {
  createClusters = value;
}


/***/ }),

/***/ 897:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEdgeLabels: () => (/* binding */ createEdgeLabels),
/* harmony export */   setCreateEdgeLabels: () => (/* binding */ setCreateEdgeLabels)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(714);
/* harmony import */ var _label_add_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(893);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);







let createEdgeLabels = function (selection, g) {
  var svgEdgeLabels = selection
    .selectAll('g.edgeLabel')
    .data(g.edges(), function (e) {
      return _util_js__WEBPACK_IMPORTED_MODULE_2__.edgeToId(e);
    })
    .classed('update', true);

  svgEdgeLabels.exit().remove();
  svgEdgeLabels.enter().append('g').classed('edgeLabel', true).style('opacity', 0);

  svgEdgeLabels = selection.selectAll('g.edgeLabel');

  svgEdgeLabels.each(function (e) {
    var root = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
    root.select('.label').remove();
    var edge = g.edge(e);
    var label = (0,_label_add_label_js__WEBPACK_IMPORTED_MODULE_1__.addLabel)(root, g.edge(e), 0).classed('label', true);
    var bbox = label.node().getBBox();

    if (edge.labelId) {
      label.attr('id', edge.labelId);
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](edge, 'width')) {
      edge.width = bbox.width;
    }
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](edge, 'height')) {
      edge.height = bbox.height;
    }
  });

  var exitSelection;

  if (svgEdgeLabels.exit) {
    exitSelection = svgEdgeLabels.exit();
  } else {
    exitSelection = svgEdgeLabels.selectAll(null); // empty selection
  }

  _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(exitSelection, g).style('opacity', 0).remove();

  return svgEdgeLabels;
};

function setCreateEdgeLabels(value) {
  createEdgeLabels = value;
}


/***/ }),

/***/ 898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEdgePaths: () => (/* binding */ createEdgePaths),
/* harmony export */   setCreateEdgePaths: () => (/* binding */ setCreateEdgePaths)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(801);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(794);
/* harmony import */ var _intersect_intersect_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(899);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);







var createEdgePaths = function (selection, g, arrows) {
  var previousPaths = selection
    .selectAll('g.edgePath')
    .data(g.edges(), function (e) {
      return _util_js__WEBPACK_IMPORTED_MODULE_2__.edgeToId(e);
    })
    .classed('update', true);

  var newPaths = enter(previousPaths, g);
  exit(previousPaths, g);

  var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
  _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(svgPaths, g).style('opacity', 1);

  // Save DOM element in the path group, and set ID and class
  svgPaths.each(function (e) {
    var domEdge = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
    var edge = g.edge(e);
    edge.elem = this;

    if (edge.id) {
      domEdge.attr('id', edge.id);
    }

    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyClass(
      domEdge,
      edge['class'],
      (domEdge.classed('update') ? 'update ' : '') + 'edgePath'
    );
  });

  svgPaths.selectAll('path.path').each(function (e) {
    var edge = g.edge(e);
    edge.arrowheadId = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"]('arrowhead');

    var domEdge = d3__WEBPACK_IMPORTED_MODULE_0__.select(this)
      .attr('marker-end', function () {
        return 'url(' + makeFragmentRef(location.href, edge.arrowheadId) + ')';
      })
      .style('fill', 'none');

    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(domEdge, g).attr('d', function (e) {
      return calcPoints(g, e);
    });

    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyStyle(domEdge, edge.style);
  });

  svgPaths.selectAll('defs *').remove();
  svgPaths.selectAll('defs').each(function (e) {
    var edge = g.edge(e);
    var arrowhead = arrows[edge.arrowhead];
    arrowhead(d3__WEBPACK_IMPORTED_MODULE_0__.select(this), edge.arrowheadId, edge, 'arrowhead');
  });

  return svgPaths;
};

function setCreateEdgePaths(value) {
  createEdgePaths = value;
}

function makeFragmentRef(url, fragmentId) {
  var baseUrl = url.split('#')[0];
  return baseUrl + '#' + fragmentId;
}

function calcPoints(g, e) {
  var edge = g.edge(e);
  var tail = g.node(e.v);
  var head = g.node(e.w);
  var points = edge.points.slice(1, edge.points.length - 1);
  points.unshift((0,_intersect_intersect_node_js__WEBPACK_IMPORTED_MODULE_1__.intersectNode)(tail, points[0]));
  points.push((0,_intersect_intersect_node_js__WEBPACK_IMPORTED_MODULE_1__.intersectNode)(head, points[points.length - 1]));

  return createLine(edge, points);
}

function createLine(edge, points) {
  // @ts-expect-error
  var line = (d3__WEBPACK_IMPORTED_MODULE_0__.line || d3__WEBPACK_IMPORTED_MODULE_0__.svg.line)()
    .x(function (d) {
      return d.x;
    })
    .y(function (d) {
      return d.y;
    });

  (line.curve || line.interpolate)(edge.curve);

  return line(points);
}

function getCoords(elem) {
  var bbox = elem.getBBox();
  var matrix = elem.ownerSVGElement
    .getScreenCTM()
    .inverse()
    .multiply(elem.getScreenCTM())
    .translate(bbox.width / 2, bbox.height / 2);
  return { x: matrix.e, y: matrix.f };
}

function enter(svgPaths, g) {
  var svgPathsEnter = svgPaths.enter().append('g').attr('class', 'edgePath').style('opacity', 0);
  svgPathsEnter
    .append('path')
    .attr('class', 'path')
    .attr('d', function (e) {
      var edge = g.edge(e);
      var sourceElem = g.node(e.v).elem;
      var points = lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](edge.points.length).map(function () {
        return getCoords(sourceElem);
      });
      return createLine(edge, points);
    });
  svgPathsEnter.append('defs');
  return svgPathsEnter;
}

function exit(svgPaths, g) {
  var svgPathExit = svgPaths.exit();
  _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(svgPathExit, g).style('opacity', 0).remove();
}


/***/ }),

/***/ 900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNodes: () => (/* binding */ createNodes),
/* harmony export */   setCreateNodes: () => (/* binding */ setCreateNodes)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(859);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(714);
/* harmony import */ var _label_add_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(893);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);







var createNodes = function (selection, g, shapes) {
  var simpleNodes = g.nodes().filter(function (v) {
    return !_util_js__WEBPACK_IMPORTED_MODULE_2__.isSubgraph(g, v);
  });
  var svgNodes = selection
    .selectAll('g.node')
    .data(simpleNodes, function (v) {
      return v;
    })
    .classed('update', true);

  svgNodes.exit().remove();

  svgNodes.enter().append('g').attr('class', 'node').style('opacity', 0);

  svgNodes = selection.selectAll('g.node');

  svgNodes.each(function (v) {
    var node = g.node(v);
    var thisGroup = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyClass(
      thisGroup,
      node['class'],
      (thisGroup.classed('update') ? 'update ' : '') + 'node'
    );

    thisGroup.select('g.label').remove();
    var labelGroup = thisGroup.append('g').attr('class', 'label');
    var labelDom = (0,_label_add_label_js__WEBPACK_IMPORTED_MODULE_1__.addLabel)(labelGroup, node);
    var shape = shapes[node.shape];
    var bbox = lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"](labelDom.node().getBBox(), 'width', 'height');

    node.elem = this;

    if (node.id) {
      thisGroup.attr('id', node.id);
    }
    if (node.labelId) {
      labelGroup.attr('id', node.labelId);
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](node, 'width')) {
      bbox.width = node.width;
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"](node, 'height')) {
      bbox.height = node.height;
    }

    bbox.width += node.paddingLeft + node.paddingRight;
    bbox.height += node.paddingTop + node.paddingBottom;
    labelGroup.attr(
      'transform',
      'translate(' +
        (node.paddingLeft - node.paddingRight) / 2 +
        ',' +
        (node.paddingTop - node.paddingBottom) / 2 +
        ')'
    );

    var root = d3__WEBPACK_IMPORTED_MODULE_0__.select(this);
    root.select('.label-container').remove();
    var shapeSvg = shape(root, bbox, node).classed('label-container', true);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.applyStyle(shapeSvg, node.style);

    var shapeBBox = shapeSvg.node().getBBox();
    node.width = shapeBBox.width;
    node.height = shapeBBox.height;
  });

  var exitSelection;

  if (svgNodes.exit) {
    exitSelection = svgNodes.exit();
  } else {
    exitSelection = svgNodes.selectAll(null); // empty selection
  }

  _util_js__WEBPACK_IMPORTED_MODULE_2__.applyTransition(exitSelection, g).style('opacity', 0).remove();

  return svgNodes;
};

function setCreateNodes(value) {
  createNodes = value;
}


/***/ }),

/***/ 910:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circle: () => (/* reexport module object */ _intersect_circle_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ellipse: () => (/* reexport module object */ _intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   node: () => (/* reexport module object */ _intersect_node_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   polygon: () => (/* reexport module object */ _intersect_polygon_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   rect: () => (/* reexport module object */ _intersect_rect_js__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _intersect_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(899);
/* harmony import */ var _intersect_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(905);
/* harmony import */ var _intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(906);
/* harmony import */ var _intersect_polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(907);
/* harmony import */ var _intersect_rect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(909);









/***/ }),

/***/ 905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectCircle: () => (/* binding */ intersectCircle)
/* harmony export */ });
/* harmony import */ var _intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(906);




function intersectCircle(node, rx, point) {
  return (0,_intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_0__.intersectEllipse)(node, rx, rx, point);
}


/***/ }),

/***/ 906:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectEllipse: () => (/* binding */ intersectEllipse)
/* harmony export */ });


function intersectEllipse(node, rx, ry, point) {
  // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html

  var cx = node.x;
  var cy = node.y;

  var px = cx - point.x;
  var py = cy - point.y;

  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);

  var dx = Math.abs((rx * ry * px) / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs((rx * ry * py) / det);
  if (point.y < cy) {
    dy = -dy;
  }

  return { x: cx + dx, y: cy + dy };
}


/***/ }),

/***/ 908:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectLine: () => (/* binding */ intersectLine)
/* harmony export */ });


/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */
function intersectLine(p1, p2, q1, q2) {
  // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
  // p7 and p473.

  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;

  // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
  // b1 y + c1 = 0.
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;

  // Compute r3 and r4.
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;

  // Check signs of r3 and r4. If both point 3 and point 4 lie on
  // same side of line 1, the line segments do not intersect.
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return /*DONT_INTERSECT*/;
  }

  // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;

  // Compute r1 and r2
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;

  // Check signs of r1 and r2. If both point 1 and point 2 lie
  // on same side of second line segment, the line segments do
  // not intersect.
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return /*DONT_INTERSECT*/;
  }

  // Line segments intersect: compute intersection point.
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return /*COLLINEAR*/;
  }

  offset = Math.abs(denom / 2);

  // The denom/2 is to get rounding instead of truncating. It
  // is added or subtracted to the numerator, depending upon the
  // sign of the numerator.
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;

  return { x: x, y: y };
}

function sameSign(r1, r2) {
  return r1 * r2 > 0;
}


/***/ }),

/***/ 899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectNode: () => (/* binding */ intersectNode)
/* harmony export */ });


function intersectNode(node, point) {
  return node.intersect(point);
}


/***/ }),

/***/ 907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectPolygon: () => (/* binding */ intersectPolygon)
/* harmony export */ });
/* harmony import */ var _intersect_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);




/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;

  var intersections = [];

  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  polyPoints.forEach(function (entry) {
    minX = Math.min(minX, entry.x);
    minY = Math.min(minY, entry.y);
  });

  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;

  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = (0,_intersect_line_js__WEBPACK_IMPORTED_MODULE_0__.intersectLine)(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }

  if (!intersections.length) {
    console.log('NO INTERSECTION FOUND, RETURN NODE CENTER', node);
    return node;
  }

  if (intersections.length > 1) {
    // More intersections, find the one nearest to edge end point
    intersections.sort(function (p, q) {
      var pdx = p.x - point.x;
      var pdy = p.y - point.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);

      var qdx = q.x - point.x;
      var qdy = q.y - point.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);

      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}


/***/ }),

/***/ 909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectRect: () => (/* binding */ intersectRect)
/* harmony export */ });


function intersectRect(node, point) {
  var x = node.x;
  var y = node.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}


/***/ }),

/***/ 893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLabel: () => (/* binding */ addLabel)
/* harmony export */ });
/* harmony import */ var _add_html_label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(894);
/* harmony import */ var _add_svg_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(895);
/* harmony import */ var _add_text_label_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(896);






function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append('g');

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  if (node.labelType === 'svg') {
    (0,_add_svg_label_js__WEBPACK_IMPORTED_MODULE_1__.addSVGLabel)(labelSvg, node);
  } else if (typeof label !== 'string' || node.labelType === 'html') {
    (0,_add_html_label_js__WEBPACK_IMPORTED_MODULE_0__.addHtmlLabel)(labelSvg, node);
  } else {
    (0,_add_text_label_js__WEBPACK_IMPORTED_MODULE_2__.addTextLabel)(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch (location) {
    case 'top':
      y = -node.height / 2;
      break;
    case 'bottom':
      y = node.height / 2 - labelBBox.height;
      break;
    default:
      y = -labelBBox.height / 2;
  }
  labelSvg.attr('transform', 'translate(' + -labelBBox.width / 2 + ',' + y + ')');

  return labelSvg;
}


/***/ }),

/***/ 895:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSVGLabel: () => (/* binding */ addSVGLabel)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);




function addSVGLabel(root, node) {
  var domNode = root;

  domNode.node().appendChild(node.label);

  _util_js__WEBPACK_IMPORTED_MODULE_0__.applyStyle(domNode, node.labelStyle);

  return domNode;
}


/***/ }),

/***/ 896:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTextLabel: () => (/* binding */ addTextLabel)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);




/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */
function addTextLabel(root, node) {
  var domNode = root.append('text');

  var lines = processEscapeSequences(node.label).split('\n');
  for (var i = 0; i < lines.length; i++) {
    domNode
      .append('tspan')
      .attr('xml:space', 'preserve')
      .attr('dy', '1em')
      .attr('x', '1')
      .text(lines[i]);
  }

  _util_js__WEBPACK_IMPORTED_MODULE_0__.applyStyle(domNode, node.labelStyle);

  return domNode;
}

function processEscapeSequences(text) {
  var newText = '';
  var escaped = false;
  var ch;
  for (var i = 0; i < text.length; ++i) {
    ch = text[i];
    if (escaped) {
      switch (ch) {
        case 'n':
          newText += '\n';
          break;
        default:
          newText += ch;
      }
      escaped = false;
    } else if (ch === '\\') {
      escaped = true;
    } else {
      newText += ch;
    }
  }
  return newText;
}


/***/ }),

/***/ 901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positionClusters: () => (/* binding */ positionClusters)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);





function positionClusters(selection, g) {
  var created = selection.filter(function () {
    return !d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  _util_js__WEBPACK_IMPORTED_MODULE_1__.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);

  _util_js__WEBPACK_IMPORTED_MODULE_1__.applyTransition(created.selectAll('rect'), g)
    .attr('width', function (v) {
      return g.node(v).width;
    })
    .attr('height', function (v) {
      return g.node(v).height;
    })
    .attr('x', function (v) {
      var node = g.node(v);
      return -node.width / 2;
    })
    .attr('y', function (v) {
      var node = g.node(v);
      return -node.height / 2;
    });
}


/***/ }),

/***/ 902:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positionEdgeLabels: () => (/* binding */ positionEdgeLabels)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(714);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);






function positionEdgeLabels(selection, g) {
  var created = selection.filter(function () {
    return !d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed('update');
  });

  function translate(e) {
    var edge = g.edge(e);
    return lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"](edge, 'x') ? 'translate(' + edge.x + ',' + edge.y + ')' : '';
  }

  created.attr('transform', translate);

  _util_js__WEBPACK_IMPORTED_MODULE_1__.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);
}


/***/ }),

/***/ 903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positionNodes: () => (/* binding */ positionNodes)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);





function positionNodes(selection, g) {
  var created = selection.filter(function () {
    return !d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed('update');
  });

  function translate(v) {
    var node = g.node(v);
    return 'translate(' + node.x + ',' + node.y + ')';
  }

  created.attr('transform', translate);

  _util_js__WEBPACK_IMPORTED_MODULE_1__.applyTransition(selection, g).style('opacity', 1).attr('transform', translate);
}


/***/ }),

/***/ 786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(714);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(889);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(764);
/* harmony import */ var _dagre_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(787);
/* harmony import */ var _arrows_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(890);
/* harmony import */ var _create_clusters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(892);
/* harmony import */ var _create_edge_labels_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(897);
/* harmony import */ var _create_edge_paths_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(898);
/* harmony import */ var _create_nodes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(900);
/* harmony import */ var _position_clusters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(901);
/* harmony import */ var _position_edge_labels_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(902);
/* harmony import */ var _position_nodes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(903);
/* harmony import */ var _shapes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(904);















// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
  var fn = function (svg, g) {
    preProcessGraph(g);

    var outputGroup = createOrSelectGroup(svg, 'output');
    var clustersGroup = createOrSelectGroup(outputGroup, 'clusters');
    var edgePathsGroup = createOrSelectGroup(outputGroup, 'edgePaths');
    var edgeLabels = (0,_create_edge_labels_js__WEBPACK_IMPORTED_MODULE_4__.createEdgeLabels)(createOrSelectGroup(outputGroup, 'edgeLabels'), g);
    var nodes = (0,_create_nodes_js__WEBPACK_IMPORTED_MODULE_6__.createNodes)(createOrSelectGroup(outputGroup, 'nodes'), g, _shapes_js__WEBPACK_IMPORTED_MODULE_10__.shapes);

    (0,_dagre_index_js__WEBPACK_IMPORTED_MODULE_1__.layout)(g);

    (0,_position_nodes_js__WEBPACK_IMPORTED_MODULE_9__.positionNodes)(nodes, g);
    (0,_position_edge_labels_js__WEBPACK_IMPORTED_MODULE_8__.positionEdgeLabels)(edgeLabels, g);
    (0,_create_edge_paths_js__WEBPACK_IMPORTED_MODULE_5__.createEdgePaths)(edgePathsGroup, g, _arrows_js__WEBPACK_IMPORTED_MODULE_2__.arrows);

    var clusters = (0,_create_clusters_js__WEBPACK_IMPORTED_MODULE_3__.createClusters)(clustersGroup, g);
    (0,_position_clusters_js__WEBPACK_IMPORTED_MODULE_7__.positionClusters)(clusters, g);

    postProcessGraph(g);
  };

  fn.createNodes = function (value) {
    if (!arguments.length) return _create_nodes_js__WEBPACK_IMPORTED_MODULE_6__.createNodes;
    (0,_create_nodes_js__WEBPACK_IMPORTED_MODULE_6__.setCreateNodes)(value);
    return fn;
  };

  fn.createClusters = function (value) {
    if (!arguments.length) return _create_clusters_js__WEBPACK_IMPORTED_MODULE_3__.createClusters;
    (0,_create_clusters_js__WEBPACK_IMPORTED_MODULE_3__.setCreateClusters)(value);
    return fn;
  };

  fn.createEdgeLabels = function (value) {
    if (!arguments.length) return _create_edge_labels_js__WEBPACK_IMPORTED_MODULE_4__.createEdgeLabels;
    (0,_create_edge_labels_js__WEBPACK_IMPORTED_MODULE_4__.setCreateEdgeLabels)(value);
    return fn;
  };

  fn.createEdgePaths = function (value) {
    if (!arguments.length) return _create_edge_paths_js__WEBPACK_IMPORTED_MODULE_5__.createEdgePaths;
    (0,_create_edge_paths_js__WEBPACK_IMPORTED_MODULE_5__.setCreateEdgePaths)(value);
    return fn;
  };

  fn.shapes = function (value) {
    if (!arguments.length) return _shapes_js__WEBPACK_IMPORTED_MODULE_10__.shapes;
    (0,_shapes_js__WEBPACK_IMPORTED_MODULE_10__.setShapes)(value);
    return fn;
  };

  fn.arrows = function (value) {
    if (!arguments.length) return _arrows_js__WEBPACK_IMPORTED_MODULE_2__.arrows;
    (0,_arrows_js__WEBPACK_IMPORTED_MODULE_2__.setArrows)(value);
    return fn;
  };

  return fn;
}

var NODE_DEFAULT_ATTRS = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
};

var EDGE_DEFAULT_ATTRS = {
  arrowhead: 'normal',
  curve: d3__WEBPACK_IMPORTED_MODULE_0__.curveLinear,
};

function preProcessGraph(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'label') && !g.children(v).length) {
      node.label = v;
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'paddingX')) {
      lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"](node, {
        paddingLeft: node.paddingX,
        paddingRight: node.paddingX,
      });
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'paddingY')) {
      lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"](node, {
        paddingTop: node.paddingY,
        paddingBottom: node.paddingY,
      });
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'padding')) {
      lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"](node, {
        paddingLeft: node.padding,
        paddingRight: node.padding,
        paddingTop: node.padding,
        paddingBottom: node.padding,
      });
    }

    lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"](node, NODE_DEFAULT_ATTRS);

    lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"](['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'], function (k) {
      node[k] = Number(node[k]);
    });

    // Save dimensions for restore during post-processing
    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'width')) {
      node._prevWidth = node.width;
    }
    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, 'height')) {
      node._prevHeight = node.height;
    }
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (!lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](edge, 'label')) {
      edge.label = '';
    }
    lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"](edge, EDGE_DEFAULT_ATTRS);
  });
}

function postProcessGraph(g) {
  lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"](g.nodes(), function (v) {
    var node = g.node(v);

    // Restore original dimensions
    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, '_prevWidth')) {
      node.width = node._prevWidth;
    } else {
      delete node.width;
    }

    if (lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"](node, '_prevHeight')) {
      node.height = node._prevHeight;
    } else {
      delete node.height;
    }

    delete node._prevWidth;
    delete node._prevHeight;
  });
}

function createOrSelectGroup(root, name) {
  var selection = root.select('g.' + name);
  if (selection.empty()) {
    selection = root.append('g').attr('class', name);
  }
  return selection;
}


/***/ }),

/***/ 904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setShapes: () => (/* binding */ setShapes),
/* harmony export */   shapes: () => (/* binding */ shapes)
/* harmony export */ });
/* harmony import */ var _intersect_intersect_circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(905);
/* harmony import */ var _intersect_intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(906);
/* harmony import */ var _intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(907);
/* harmony import */ var _intersect_intersect_rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);







var shapes = {
  rect,
  ellipse,
  circle,
  diamond,
};

function setShapes(value) {
  shapes = value;
}

function rect(parent, bbox, node) {
  var shapeSvg = parent
    .insert('rect', ':first-child')
    .attr('rx', node.rx)
    .attr('ry', node.ry)
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('width', bbox.width)
    .attr('height', bbox.height);

  node.intersect = function (point) {
    return (0,_intersect_intersect_rect_js__WEBPACK_IMPORTED_MODULE_3__.intersectRect)(node, point);
  };

  return shapeSvg;
}

function ellipse(parent, bbox, node) {
  var rx = bbox.width / 2;
  var ry = bbox.height / 2;
  var shapeSvg = parent
    .insert('ellipse', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('rx', rx)
    .attr('ry', ry);

  node.intersect = function (point) {
    return (0,_intersect_intersect_ellipse_js__WEBPACK_IMPORTED_MODULE_1__.intersectEllipse)(node, rx, ry, point);
  };

  return shapeSvg;
}

function circle(parent, bbox, node) {
  var r = Math.max(bbox.width, bbox.height) / 2;
  var shapeSvg = parent
    .insert('circle', ':first-child')
    .attr('x', -bbox.width / 2)
    .attr('y', -bbox.height / 2)
    .attr('r', r);

  node.intersect = function (point) {
    return (0,_intersect_intersect_circle_js__WEBPACK_IMPORTED_MODULE_0__.intersectCircle)(node, r, point);
  };

  return shapeSvg;
}

// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
  var w = (bbox.width * Math.SQRT2) / 2;
  var h = (bbox.height * Math.SQRT2) / 2;
  var points = [
    { x: 0, y: -h },
    { x: -w, y: 0 },
    { x: 0, y: h },
    { x: w, y: 0 },
  ];
  var shapeSvg = parent.insert('polygon', ':first-child').attr(
    'points',
    points
      .map(function (p) {
        return p.x + ',' + p.y;
      })
      .join(' ')
  );

  node.intersect = function (p) {
    return (0,_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_2__.intersectPolygon)(node, points, p);
  };

  return shapeSvg;
}


/***/ }),

/***/ 785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   graphlib: () => (/* reexport module object */ _graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   intersect: () => (/* reexport module object */ _dagre_js_intersect_index_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   render: () => (/* reexport safe */ _dagre_js_render_js__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _dagre_js_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(786);
/* harmony import */ var _graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712);
/* harmony import */ var _dagre_js_intersect_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(910);








/***/ }),

/***/ 711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(913);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(712);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(574);
/* harmony import */ var dagre_d3_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(785);
/* harmony import */ var dagre_d3_es_src_dagre_js_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(894);
/* harmony import */ var dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(907);
/* harmony import */ var dagre_d3_es_src_dagre_js_intersect_intersect_rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(909);
/* harmony import */ var _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(914);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(573);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(787);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(911);

























function question(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const s = (w + h) * 0.9;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, s, s, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function hexagon(parent, bbox, node) {
  const f = 4;
  const h = bbox.height;
  const m = h / f;
  const w = bbox.width + 2 * m;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function rect_left_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function lean_right(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function lean_left(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function inv_trapezoid(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function rect_right_inv_arrow(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function stadium(parent, bbox, node) {
  const h = bbox.height;
  const w = bbox.width + h / 4;
  const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_rect_js__WEBPACK_IMPORTED_MODULE_6__.intersectRect)(node, point);
  };
  return shapeSvg;
}
function subroutine(parent, bbox, node) {
  const w = bbox.width;
  const h = bbox.height;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const shapeSvg = insertPolygonShape(parent, w, h, points);
  node.intersect = function(point) {
    return (0,dagre_d3_es_src_dagre_js_intersect_intersect_polygon_js__WEBPACK_IMPORTED_MODULE_5__.intersectPolygon)(node, points, point);
  };
  return shapeSvg;
}
function cylinder(parent, bbox, node) {
  const w = bbox.width;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  node.intersect = function(point) {
    const pos = (0,dagre_d3_es_src_dagre_js_intersect_intersect_rect_js__WEBPACK_IMPORTED_MODULE_6__.intersectRect)(node, point);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}
function addToRender(render2) {
  render2.shapes().question = question;
  render2.shapes().hexagon = hexagon;
  render2.shapes().stadium = stadium;
  render2.shapes().subroutine = subroutine;
  render2.shapes().cylinder = cylinder;
  render2.shapes().rect_left_inv_arrow = rect_left_inv_arrow;
  render2.shapes().lean_right = lean_right;
  render2.shapes().lean_left = lean_left;
  render2.shapes().trapezoid = trapezoid;
  render2.shapes().inv_trapezoid = inv_trapezoid;
  render2.shapes().rect_right_inv_arrow = rect_right_inv_arrow;
}
function addToRenderV2(addShape) {
  addShape({ question });
  addShape({ hexagon });
  addShape({ stadium });
  addShape({ subroutine });
  addShape({ cylinder });
  addShape({ rect_left_inv_arrow });
  addShape({ lean_right });
  addShape({ lean_left });
  addShape({ trapezoid });
  addShape({ inv_trapezoid });
  addShape({ rect_right_inv_arrow });
}
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const flowChartShapes = {
  addToRender,
  addToRenderV2
};
const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = function(vert, g, svgId, root, _doc, diagObj) {
  const svg = !root ? (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
  const doc = !_doc ? document : _doc;
  const keys = Object.keys(vert);
  keys.forEach(function(id) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    const styles = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.k)(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    if ((0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.m)((0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.c)().flowchart.htmlLabels)) {
      const node = {
        label: vertexText.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )
      };
      vertexNode = (0,dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_4__.addHtmlLabel)(svg, node).node();
      vertexNode.parentNode.removeChild(vertexNode);
    } else {
      const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
      svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
      const rows = vertexText.split(_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.e.lineBreakRegex);
      for (const row of rows) {
        const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        tspan.setAttribute("dy", "1em");
        tspan.setAttribute("x", "1");
        tspan.textContent = row;
        svgLabel.appendChild(tspan);
      }
      vertexNode = svgLabel;
    }
    let radious = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radious = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      default:
        _shape = "rect";
    }
    _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.l.warn("Adding node", vertex.id, vertex.domId);
    g.setNode(diagObj.db.lookUpDomId(vertex.id), {
      labelType: "svg",
      labelStyle: styles.labelStyle,
      shape: _shape,
      label: vertexNode,
      rx: radious,
      ry: radious,
      class: classStr,
      style: styles.style,
      id: diagObj.db.lookUpDomId(vertex.id)
    });
  });
};
const addEdges = function(edges, g, diagObj) {
  let cnt = 0;
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.k)(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  edges.forEach(function(edge) {
    cnt++;
    const linkId = "L-" + edge.start + "-" + edge.end;
    const linkNameStart = "LS-" + edge.start;
    const linkNameEnd = "LE-" + edge.end;
    const edgeData = {};
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    let style = "";
    let labelStyle = "";
    if (edge.style !== void 0) {
      const styles = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.k)(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    } else {
      switch (edge.stroke) {
        case "normal":
          style = "fill:none";
          if (defaultStyle !== void 0) {
            style = defaultStyle;
          }
          if (defaultLabelStyle !== void 0) {
            labelStyle = defaultLabelStyle;
          }
          break;
        case "dotted":
          style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          style = " stroke-width: 3.5px;fill:none";
          break;
      }
    }
    edgeData.style = style;
    edgeData.labelStyle = labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.n)(edge.interpolate, d3__WEBPACK_IMPORTED_MODULE_1__.curveLinear);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.n)(edges.defaultInterpolate, d3__WEBPACK_IMPORTED_MODULE_1__.curveLinear);
    } else {
      edgeData.curve = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.n)(conf.curve, d3__WEBPACK_IMPORTED_MODULE_1__.curveLinear);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
      if ((0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.m)((0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.c)().flowchart.htmlLabels)) {
        edgeData.labelType = "html";
        edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${edge.text.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (s) => `<i class='${s.replace(":", " ")}'></i>`
        )}</span>`;
      } else {
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace(_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.e.lineBreakRegex, "\n");
        if (edge.style === void 0) {
          edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
        }
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
      }
    }
    edgeData.id = linkId;
    edgeData.class = linkNameStart + " " + linkNameEnd;
    edgeData.minlen = edge.length || 1;
    g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
  });
};
const getClasses = function(text, diagObj) {
  _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.l.info("Extracting classes");
  return diagObj.db.getClasses();
};
const draw = function(text, id, _version, diagObj) {
  _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.l.info("Drawing flowchart");
  const { securityLevel, flowchart: conf2 } = (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.c)();
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__.Graph({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
  }
  const vert = diagObj.db.getVertices();
  _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.l.warn("Get vertices", vert);
  const edges = diagObj.db.getEdges();
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    (0,d3__WEBPACK_IMPORTED_MODULE_1__.selectAll)("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.l.warn(
        "Setting subgraph",
        subG.nodes[j],
        diagObj.db.lookUpDomId(subG.nodes[j]),
        diagObj.db.lookUpDomId(subG.id)
      );
      g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
    }
  }
  addVertices(vert, g, id, root, doc, diagObj);
  addEdges(edges, g, diagObj);
  const render$1 = new dagre_d3_es__WEBPACK_IMPORTED_MODULE_2__.render();
  flowChartShapes.addToRender(render$1);
  render$1.arrows().none = function normal(parent, id2, edge, type) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    (0,dagre_d3_es_src_dagre_js_util_js__WEBPACK_IMPORTED_MODULE_3__.applyStyle)(path, edge[type + "Style"]);
  };
  render$1.arrows().normal = function normal(parent, id2) {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  render$1(element, g);
  element.selectAll("g.node").attr("title", function() {
    return diagObj.db.getTooltip(this.id);
  });
  diagObj.db.indexNodes("subGraph" + i);
  for (i = 0; i < subGraphs.length; i++) {
    subG = subGraphs[i];
    if (subG.title !== "undefined") {
      const clusterRects = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect'
      );
      const clusterEl = doc.querySelectorAll(
        "#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]'
      );
      const xPos = clusterRects[0].x.baseVal.value;
      const yPos = clusterRects[0].y.baseVal.value;
      const _width = clusterRects[0].width.baseVal.value;
      const cluster = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(clusterEl[0]);
      const te = cluster.select(".label");
      te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
      te.attr("id", id + "Text");
      for (let j = 0; j < subG.classes.length; j++) {
        clusterEl[0].classList.add(subG.classes[j]);
      }
    }
  }
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_13__.o)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRenderer = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const diagram = {
  parser: _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_14__.p,
  db: _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_14__.f,
  renderer: _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_15__.f,
  styles: _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_15__.a,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    flowRenderer.setConf(cnf.flowchart);
    _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_14__.f.clear();
    _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_14__.f.setGen("gen-1");
  }
};



/***/ })

};
;
//# sourceMappingURL=4.extension.js.map