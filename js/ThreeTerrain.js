
// Three.js r46dev - http://github.com/mrdoob/three.js
var THREE = THREE || {};
if (!self.Int32Array) self.Int32Array = Array, self.Float32Array = Array;
THREE.Clock = function (a) {
    this.autoStart = a !== void 0 ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
};
THREE.Clock.prototype.start = function () {
    this.oldTime = this.startTime = Date.now();
    this.running = !0
};
THREE.Clock.prototype.stop = function () {
    this.getElapsedTime();
    this.running = !1
};
THREE.Clock.prototype.getElapsedTime = function () {
    this.elapsedTime += this.getDelta();
    return this.elapsedTime
};
THREE.Clock.prototype.getDelta = function () {
    var a = 0;
    this.autoStart && !this.running && this.start();
    if (this.running) {
        var c = Date.now(),
            a = 0.0010 * (c - this.oldTime);
        this.oldTime = c;
        this.elapsedTime += a
    }
    return a
};
THREE.Color = function (a) {
    a !== void 0 && this.setHex(a);
    return this
};
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    copy: function (a) {
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        return this
    },
    copyGammaToLinear: function (a) {
        this.r = a.r * a.r;
        this.g = a.g * a.g;
        this.b = a.b * a.b;
        return this
    },
    copyLinearToGamma: function (a) {
        this.r = Math.sqrt(a.r);
        this.g = Math.sqrt(a.g);
        this.b = Math.sqrt(a.b);
        return this
    },
    setRGB: function (a, c, b) {
        this.r = a;
        this.g = c;
        this.b = b;
        return this
    },
    setHSV: function (a, c, b) {
        var d, g, e;
        if (b === 0) this.r = this.g = this.b = 0;
        else switch (d = Math.floor(a * 6), g = a * 6 - d, a = b * (1 - c), e = b * (1 -
            c * g), c = b * (1 - c * (1 - g)), d) {
        case 1:
            this.r = e;
            this.g = b;
            this.b = a;
            break;
        case 2:
            this.r = a;
            this.g = b;
            this.b = c;
            break;
        case 3:
            this.r = a;
            this.g = e;
            this.b = b;
            break;
        case 4:
            this.r = c;
            this.g = a;
            this.b = b;
            break;
        case 5:
            this.r = b;
            this.g = a;
            this.b = e;
            break;
        case 6:
        case 0:
            this.r = b, this.g = c, this.b = a
        }
        return this
    },
    setHex: function (a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    },
    getHex: function () {
        return~~ (this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
    },
    getContextStyle: function () {
        return "rgb(" +
            Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
    },
    clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
};
THREE.Vector2 = function (a, c) {
    this.x = a || 0;
    this.y = c || 0
};
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function (a, c) {
        this.x = a;
        this.y = c;
        return this
    },
    copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    clone: function () {
        return new THREE.Vector2(this.x, this.y)
    },
    add: function (a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        return this
    },
    addSelf: function (a) {
        this.x += a.x;
        this.y += a.y;
        return this
    },
    sub: function (a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        return this
    },
    subSelf: function (a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    multiplyScalar: function (a) {
        this.x *= a;
        this.y *= a;
        return this
    },
    divideScalar: function (a) {
        a ? (this.x /= a, this.y /= a) : this.set(0, 0);
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (a) {
        return this.x * a.x + this.y * a.y
    },
    lengthSq: function () {
        return this.x * this.x + this.y * this.y
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function (a) {
        var c = this.x - a.x,
            a = this.y - a.y;
        return c * c + a * a
    },
    setLength: function (a) {
        return this.normalize().multiplyScalar(a)
    },
    equals: function (a) {
        return a.x === this.x && a.y === this.y
    }
};
THREE.Vector3 = function (a, c, b) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = b || 0
};
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function (a, c, b) {
        this.x = a;
        this.y = c;
        this.z = b;
        return this
    },
    setX: function (a) {
        this.x = a;
        return this
    },
    setY: function (a) {
        this.y = a;
        return this
    },
    setZ: function (a) {
        this.z = a;
        return this
    },
    copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    },
    add: function (a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        return this
    },
    addSelf: function (a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function (a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    sub: function (a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z - c.z;
        return this
    },
    subSelf: function (a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    multiply: function (a, c) {
        this.x = a.x * c.x;
        this.y = a.y * c.y;
        this.z = a.z * c.z;
        return this
    },
    multiplySelf: function (a) {
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function (a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    divideSelf: function (a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function (a) {
        a ? (this.x /= a, this.y /= a, this.z /= a) : this.z = this.y = this.x = 0;
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    lengthManhattan: function () {
        return this.x + this.y + this.z
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    setLength: function (a) {
        return this.normalize().multiplyScalar(a)
    },
    cross: function (a, c) {
        this.x = a.y * c.z - a.z * c.y;
        this.y = a.z * c.x - a.x * c.z;
        this.z = a.x * c.y - a.y * c.x;
        return this
    },
    crossSelf: function (a) {
        var c = this.x,
            b = this.y,
            d = this.z;
        this.x = b * a.z - d * a.y;
        this.y = d * a.x - c * a.z;
        this.z = c * a.y - b * a.x;
        return this
    },
    distanceTo: function (a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function (a) {
        return (new THREE.Vector3).sub(this, a).lengthSq()
    },
    setPositionFromMatrix: function (a) {
        this.x = a.n14;
        this.y = a.n24;
        this.z = a.n34
    },
    setRotationFromMatrix: function (a) {
        var c = Math.cos(this.y);
        this.y = Math.asin(a.n13);
        Math.abs(c) > 1.0E-5 ? (this.x = Math.atan2(-a.n23 / c, a.n33 / c), this.z = Math.atan2(-a.n12 / c, a.n11 / c)) : (this.x = 0, this.z = Math.atan2(a.n21, a.n22))
    },
    isZero: function () {
        return this.lengthSq() < 1.0E-4
    }
};
THREE.Vector4 = function (a, c, b, d) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = b || 0;
    this.w = d !== void 0 ? d : 1
};
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function (a, c, b, d) {
        this.x = a;
        this.y = c;
        this.z = b;
        this.w = d;
        return this
    },
    copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w !== void 0 ? a.w : 1
    },
    clone: function () {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },
    add: function (a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        this.w = a.w + c.w;
        return this
    },
    addSelf: function (a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    sub: function (a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z -
            c.z;
        this.w = a.w - c.w;
        return this
    },
    subSelf: function (a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    multiplyScalar: function (a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },
    divideScalar: function (a) {
        a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this.z = this.y = this.x = 0, this.w = 1);
        return this
    },
    negate: function () {
        return this.multiplyScalar(-1)
    },
    dot: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },
    lengthSq: function () {
        return this.dot(this)
    },
    length: function () {
        return Math.sqrt(this.lengthSq())
    },
    normalize: function () {
        return this.divideScalar(this.length())
    },
    setLength: function (a) {
        return this.normalize().multiplyScalar(a)
    },
    lerpSelf: function (a, c) {
        this.x += (a.x - this.x) * c;
        this.y += (a.y - this.y) * c;
        this.z += (a.z - this.z) * c;
        this.w += (a.w - this.w) * c;
        return this
    }
};
THREE.Ray = function (a, c) {
    function b(a, b, c) {
        p.sub(c, a);
        t = p.dot(b);
        if (t <= 0) return null;
        n = q.add(a, m.copy(b).multiplyScalar(t));
        return o = c.distanceTo(n)
    }

    function d(a, b, c, d) {
        p.sub(d, b);
        q.sub(c, b);
        m.sub(a, b);
        s = p.dot(p);
        u = p.dot(q);
        r = p.dot(m);
        z = q.dot(q);
        E = q.dot(m);
        G = 1 / (s * z - u * u);
        v = (z * r - u * E) * G;
        w = (s * E - u * r) * G;
        return v >= 0 && w >= 0 && v + w < 1
    }
    this.origin = a || new THREE.Vector3;
    this.direction = c || new THREE.Vector3;
    this.intersectScene = function (a) {
        return this.intersectObjects(a.children)
    };
    this.intersectObjects = function (a) {
        var b,
            c, d = [];
        b = 0;
        for (c = a.length; b < c; b++) Array.prototype.push.apply(d, this.intersectObject(a[b]));
        d.sort(function (a, b) {
            return a.distance - b.distance
        });
        return d
    };
    var g = new THREE.Vector3,
        e = new THREE.Vector3,
        f = new THREE.Vector3,
        h = new THREE.Vector3,
        a = new THREE.Vector3,
        c = new THREE.Vector3,
        i = new THREE.Vector3,
        l = new THREE.Vector3,
        k = new THREE.Vector3;
    this.intersectObject = function (m) {
        for (var n, p = [], q = 0, t = m.children.length; q < t; q++) Array.prototype.push.apply(p, this.intersectObject(m.children[q]));
        if (m instanceof THREE.Particle) {
            q =
                b(this.origin, this.direction, m.matrixWorld.getPosition());
            if (q === null || q > m.scale.x) return [];
            n = {
                distance: q,
                point: m.position,
                face: null,
                object: m
            };
            p.push(n)
        } else if (m instanceof THREE.Mesh) {
            q = b(this.origin, this.direction, m.matrixWorld.getPosition());
            if (q === null || q > m.geometry.boundingSphere.radius * Math.max(m.scale.x, Math.max(m.scale.y, m.scale.z))) return p;
            var o, s = m.geometry,
                u = s.vertices,
                r;
            m.matrixRotationWorld.extractRotation(m.matrixWorld);
            q = 0;
            for (t = s.faces.length; q < t; q++)
                if (n = s.faces[q], a.copy(this.origin),
                    c.copy(this.direction), r = m.matrixWorld, i = r.multiplyVector3(i.copy(n.centroid)).subSelf(a), o = i.dot(c), !(o <= 0) && (g = r.multiplyVector3(g.copy(u[n.a].position)), e = r.multiplyVector3(e.copy(u[n.b].position)), f = r.multiplyVector3(f.copy(u[n.c].position)), h = n instanceof THREE.Face4 ? r.multiplyVector3(h.copy(u[n.d].position)) : null, l = m.matrixRotationWorld.multiplyVector3(l.copy(n.normal)), o = c.dot(l), m.doubleSided || (m.flipSided ? o > 0 : o < 0)))
                    if (o = l.dot(i.sub(g, a)) / o, k.add(a, c.multiplyScalar(o)), n instanceof THREE.Face3) d(k,
                        g, e, f) && (n = {
                        distance: a.distanceTo(k),
                        point: k.clone(),
                        face: n,
                        object: m
                    }, p.push(n));
                    else if (n instanceof THREE.Face4 && (d(k, g, e, h) || d(k, e, f, h))) n = {
                distance: a.distanceTo(k),
                point: k.clone(),
                face: n,
                object: m
            }, p.push(n)
        }
        return p
    };
    var p = new THREE.Vector3,
        q = new THREE.Vector3,
        m = new THREE.Vector3,
        t, n, o, s, u, r, z, E, G, v, w
};
THREE.Rectangle = function () {
    function a() {
        e = d - c;
        f = g - b
    }
    var c, b, d, g, e, f, h = !0;
    this.getX = function () {
        return c
    };
    this.getY = function () {
        return b
    };
    this.getWidth = function () {
        return e
    };
    this.getHeight = function () {
        return f
    };
    this.getLeft = function () {
        return c
    };
    this.getTop = function () {
        return b
    };
    this.getRight = function () {
        return d
    };
    this.getBottom = function () {
        return g
    };
    this.set = function (e, f, k, p) {
        h = !1;
        c = e;
        b = f;
        d = k;
        g = p;
        a()
    };
    this.addPoint = function (e, f) {
        h ? (h = !1, c = e, b = f, d = e, g = f) : (c = c < e ? c : e, b = b < f ? b : f, d = d > e ? d : e, g = g > f ? g : f);
        a()
    };
    this.add3Points =
        function (e, f, k, p, q, m) {
            h ? (h = !1, c = e < k ? e < q ? e : q : k < q ? k : q, b = f < p ? f < m ? f : m : p < m ? p : m, d = e > k ? e > q ? e : q : k > q ? k : q, g = f > p ? f > m ? f : m : p > m ? p : m) : (c = e < k ? e < q ? e < c ? e : c : q < c ? q : c : k < q ? k < c ? k : c : q < c ? q : c, b = f < p ? f < m ? f < b ? f : b : m < b ? m : b : p < m ? p < b ? p : b : m < b ? m : b, d = e > k ? e > q ? e > d ? e : d : q > d ? q : d : k > q ? k > d ? k : d : q > d ? q : d, g = f > p ? f > m ? f > g ? f : g : m > g ? m : g : p > m ? p > g ? p : g : m > g ? m : g);
            a()
    };
    this.addRectangle = function (e) {
        h ? (h = !1, c = e.getLeft(), b = e.getTop(), d = e.getRight(), g = e.getBottom()) : (c = c < e.getLeft() ? c : e.getLeft(), b = b < e.getTop() ? b : e.getTop(), d = d > e.getRight() ? d : e.getRight(), g = g >
            e.getBottom() ? g : e.getBottom());
        a()
    };
    this.inflate = function (e) {
        c -= e;
        b -= e;
        d += e;
        g += e;
        a()
    };
    this.minSelf = function (e) {
        c = c > e.getLeft() ? c : e.getLeft();
        b = b > e.getTop() ? b : e.getTop();
        d = d < e.getRight() ? d : e.getRight();
        g = g < e.getBottom() ? g : e.getBottom();
        a()
    };
    this.intersects = function (a) {
        return Math.min(d, a.getRight()) - Math.max(c, a.getLeft()) >= 0 && Math.min(g, a.getBottom()) - Math.max(b, a.getTop()) >= 0
    };
    this.empty = function () {
        h = !0;
        g = d = b = c = 0;
        a()
    };
    this.isEmpty = function () {
        return h
    }
};
THREE.Math = {
    clamp: function (a, c, b) {
        return a < c ? c : a > b ? b : a
    },
    clampBottom: function (a, c) {
        return a < c ? c : a
    },
    mapLinear: function (a, c, b, d, g) {
        return d + (a - c) * (g - d) / (b - c)
    },
    random16: function () {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    }
};
THREE.Matrix3 = function () {
    this.m = []
};
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    transpose: function () {
        var a, c = this.m;
        a = c[1];
        c[1] = c[3];
        c[3] = a;
        a = c[2];
        c[2] = c[6];
        c[6] = a;
        a = c[5];
        c[5] = c[7];
        c[7] = a;
        return this
    },
    transposeIntoArray: function (a) {
        var c = this.m;
        a[0] = c[0];
        a[1] = c[3];
        a[2] = c[6];
        a[3] = c[1];
        a[4] = c[4];
        a[5] = c[7];
        a[6] = c[2];
        a[7] = c[5];
        a[8] = c[8];
        return this
    }
};
THREE.Matrix4 = function (a, c, b, d, g, e, f, h, i, l, k, p, q, m, t, n) {
    this.set(a !== void 0 ? a : 1, c || 0, b || 0, d || 0, g || 0, e !== void 0 ? e : 1, f || 0, h || 0, i || 0, l || 0, k !== void 0 ? k : 1, p || 0, q || 0, m || 0, t || 0, n !== void 0 ? n : 1);
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (a, c, b, d, g, e, f, h, i, l, k, p, q, m, t, n) {
        this.n11 = a;
        this.n12 = c;
        this.n13 = b;
        this.n14 = d;
        this.n21 = g;
        this.n22 = e;
        this.n23 = f;
        this.n24 = h;
        this.n31 = i;
        this.n32 = l;
        this.n33 = k;
        this.n34 = p;
        this.n41 = q;
        this.n42 = m;
        this.n43 = t;
        this.n44 = n;
        return this
    },
    identity: function () {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    copy: function (a) {
        this.set(a.n11, a.n12, a.n13, a.n14, a.n21, a.n22, a.n23, a.n24, a.n31, a.n32, a.n33, a.n34, a.n41, a.n42, a.n43, a.n44);
        return this
    },
    lookAt: function (a,
        c, b) {
        var d = THREE.Matrix4.__v1,
            g = THREE.Matrix4.__v2,
            e = THREE.Matrix4.__v3;
        e.sub(a, c).normalize();
        if (e.length() === 0) e.z = 1;
        d.cross(b, e).normalize();
        d.length() === 0 && (e.x += 1.0E-4, d.cross(b, e).normalize());
        g.cross(e, d).normalize();
        this.n11 = d.x;
        this.n12 = g.x;
        this.n13 = e.x;
        this.n21 = d.y;
        this.n22 = g.y;
        this.n23 = e.y;
        this.n31 = d.z;
        this.n32 = g.z;
        this.n33 = e.z;
        return this
    },
    multiply: function (a, c) {
        var b = a.n11,
            d = a.n12,
            g = a.n13,
            e = a.n14,
            f = a.n21,
            h = a.n22,
            i = a.n23,
            l = a.n24,
            k = a.n31,
            p = a.n32,
            q = a.n33,
            m = a.n34,
            t = a.n41,
            n = a.n42,
            o = a.n43,
            s = a.n44,
            u = c.n11,
            r = c.n12,
            z = c.n13,
            E = c.n14,
            G = c.n21,
            v = c.n22,
            w = c.n23,
            C = c.n24,
            F = c.n31,
            B = c.n32,
            L = c.n33,
            J = c.n34,
            W = c.n41,
            X = c.n42,
            T = c.n43,
            ea = c.n44;
        this.n11 = b * u + d * G + g * F + e * W;
        this.n12 = b * r + d * v + g * B + e * X;
        this.n13 = b * z + d * w + g * L + e * T;
        this.n14 = b * E + d * C + g * J + e * ea;
        this.n21 = f * u + h * G + i * F + l * W;
        this.n22 = f * r + h * v + i * B + l * X;
        this.n23 = f * z + h * w + i * L + l * T;
        this.n24 = f * E + h * C + i * J + l * ea;
        this.n31 = k * u + p * G + q * F + m * W;
        this.n32 = k * r + p * v + q * B + m * X;
        this.n33 = k * z + p * w + q * L + m * T;
        this.n34 = k * E + p * C + q * J + m * ea;
        this.n41 = t * u + n * G + o * F + s * W;
        this.n42 = t * r + n * v + o * B + s * X;
        this.n43 = t *
            z + n * w + o * L + s * T;
        this.n44 = t * E + n * C + o * J + s * ea;
        return this
    },
    multiplySelf: function (a) {
        return this.multiply(this, a)
    },
    multiplyToArray: function (a, c, b) {
        this.multiply(a, c);
        b[0] = this.n11;
        b[1] = this.n21;
        b[2] = this.n31;
        b[3] = this.n41;
        b[4] = this.n12;
        b[5] = this.n22;
        b[6] = this.n32;
        b[7] = this.n42;
        b[8] = this.n13;
        b[9] = this.n23;
        b[10] = this.n33;
        b[11] = this.n43;
        b[12] = this.n14;
        b[13] = this.n24;
        b[14] = this.n34;
        b[15] = this.n44;
        return this
    },
    multiplyScalar: function (a) {
        this.n11 *= a;
        this.n12 *= a;
        this.n13 *= a;
        this.n14 *= a;
        this.n21 *= a;
        this.n22 *= a;
        this.n23 *= a;
        this.n24 *= a;
        this.n31 *= a;
        this.n32 *= a;
        this.n33 *= a;
        this.n34 *= a;
        this.n41 *= a;
        this.n42 *= a;
        this.n43 *= a;
        this.n44 *= a;
        return this
    },
    multiplyVector3: function (a) {
        var c = a.x,
            b = a.y,
            d = a.z,
            g = 1 / (this.n41 * c + this.n42 * b + this.n43 * d + this.n44);
        a.x = (this.n11 * c + this.n12 * b + this.n13 * d + this.n14) * g;
        a.y = (this.n21 * c + this.n22 * b + this.n23 * d + this.n24) * g;
        a.z = (this.n31 * c + this.n32 * b + this.n33 * d + this.n34) * g;
        return a
    },
    multiplyVector4: function (a) {
        var c = a.x,
            b = a.y,
            d = a.z,
            g = a.w;
        a.x = this.n11 * c + this.n12 * b + this.n13 * d + this.n14 * g;
        a.y = this.n21 *
            c + this.n22 * b + this.n23 * d + this.n24 * g;
        a.z = this.n31 * c + this.n32 * b + this.n33 * d + this.n34 * g;
        a.w = this.n41 * c + this.n42 * b + this.n43 * d + this.n44 * g;
        return a
    },
    rotateAxis: function (a) {
        var c = a.x,
            b = a.y,
            d = a.z;
        a.x = c * this.n11 + b * this.n12 + d * this.n13;
        a.y = c * this.n21 + b * this.n22 + d * this.n23;
        a.z = c * this.n31 + b * this.n32 + d * this.n33;
        a.normalize();
        return a
    },
    crossVector: function (a) {
        var c = new THREE.Vector4;
        c.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
        c.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
        c.z = this.n31 * a.x + this.n32 *
            a.y + this.n33 * a.z + this.n34 * a.w;
        c.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
        return c
    },
    determinant: function () {
        var a = this.n11,
            c = this.n12,
            b = this.n13,
            d = this.n14,
            g = this.n21,
            e = this.n22,
            f = this.n23,
            h = this.n24,
            i = this.n31,
            l = this.n32,
            k = this.n33,
            p = this.n34,
            q = this.n41,
            m = this.n42,
            t = this.n43,
            n = this.n44;
        return d * f * l * q - b * h * l * q - d * e * k * q + c * h * k * q + b * e * p * q - c * f * p * q - d * f * i * m + b * h * i * m + d * g * k * m - a * h * k * m - b * g * p * m + a * f * p * m + d * e * i * t - c * h * i * t - d * g * l * t + a * h * l * t + c * g * p * t - a * e * p * t - b * e * i * n + c * f * i * n + b * g * l * n - a * f * l * n - c * g * k * n + a * e * k *
            n
    },
    transpose: function () {
        var a;
        a = this.n21;
        this.n21 = this.n12;
        this.n12 = a;
        a = this.n31;
        this.n31 = this.n13;
        this.n13 = a;
        a = this.n32;
        this.n32 = this.n23;
        this.n23 = a;
        a = this.n41;
        this.n41 = this.n14;
        this.n14 = a;
        a = this.n42;
        this.n42 = this.n24;
        this.n24 = a;
        a = this.n43;
        this.n43 = this.n34;
        this.n43 = a;
        return this
    },
    clone: function () {
        var a = new THREE.Matrix4;
        a.n11 = this.n11;
        a.n12 = this.n12;
        a.n13 = this.n13;
        a.n14 = this.n14;
        a.n21 = this.n21;
        a.n22 = this.n22;
        a.n23 = this.n23;
        a.n24 = this.n24;
        a.n31 = this.n31;
        a.n32 = this.n32;
        a.n33 = this.n33;
        a.n34 = this.n34;
        a.n41 = this.n41;
        a.n42 = this.n42;
        a.n43 = this.n43;
        a.n44 = this.n44;
        return a
    },
    flatten: function () {
        this.flat[0] = this.n11;
        this.flat[1] = this.n21;
        this.flat[2] = this.n31;
        this.flat[3] = this.n41;
        this.flat[4] = this.n12;
        this.flat[5] = this.n22;
        this.flat[6] = this.n32;
        this.flat[7] = this.n42;
        this.flat[8] = this.n13;
        this.flat[9] = this.n23;
        this.flat[10] = this.n33;
        this.flat[11] = this.n43;
        this.flat[12] = this.n14;
        this.flat[13] = this.n24;
        this.flat[14] = this.n34;
        this.flat[15] = this.n44;
        return this.flat
    },
    flattenToArray: function (a) {
        a[0] = this.n11;
        a[1] = this.n21;
        a[2] = this.n31;
        a[3] = this.n41;
        a[4] = this.n12;
        a[5] = this.n22;
        a[6] = this.n32;
        a[7] = this.n42;
        a[8] = this.n13;
        a[9] = this.n23;
        a[10] = this.n33;
        a[11] = this.n43;
        a[12] = this.n14;
        a[13] = this.n24;
        a[14] = this.n34;
        a[15] = this.n44;
        return a
    },
    flattenToArrayOffset: function (a, c) {
        a[c] = this.n11;
        a[c + 1] = this.n21;
        a[c + 2] = this.n31;
        a[c + 3] = this.n41;
        a[c + 4] = this.n12;
        a[c + 5] = this.n22;
        a[c + 6] = this.n32;
        a[c + 7] = this.n42;
        a[c + 8] = this.n13;
        a[c + 9] = this.n23;
        a[c + 10] = this.n33;
        a[c + 11] = this.n43;
        a[c + 12] = this.n14;
        a[c + 13] = this.n24;
        a[c + 14] = this.n34;
        a[c + 15] = this.n44;
        return a
    },
    setTranslation: function (a, c, b) {
        this.set(1, 0, 0, a, 0, 1, 0, c, 0, 0, 1, b, 0, 0, 0, 1);
        return this
    },
    setScale: function (a, c, b) {
        this.set(a, 0, 0, 0, 0, c, 0, 0, 0, 0, b, 0, 0, 0, 0, 1);
        return this
    },
    setRotationX: function (a) {
        var c = Math.cos(a),
            a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, c, -a, 0, 0, a, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotationY: function (a) {
        var c = Math.cos(a),
            a = Math.sin(a);
        this.set(c, 0, a, 0, 0, 1, 0, 0, -a, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotationZ: function (a) {
        var c = Math.cos(a),
            a = Math.sin(a);
        this.set(c, -a, 0, 0, a, c, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    setRotationAxis: function (a, c) {
        var b = Math.cos(c),
            d = Math.sin(c),
            g = 1 - b,
            e = a.x,
            f = a.y,
            h = a.z,
            i = g * e,
            l = g * f;
        this.set(i * e + b, i * f - d * h, i * h + d * f, 0, i * f + d * h, l * f + b, l * h - d * e, 0, i * h - d * f, l * h + d * e, g * h * h + b, 0, 0, 0, 0, 1);
        return this
    },
    setPosition: function (a) {
        this.n14 = a.x;
        this.n24 = a.y;
        this.n34 = a.z;
        return this
    },
    getPosition: function () {
        return THREE.Matrix4.__v1.set(this.n14, this.n24, this.n34)
    },
    getColumnX: function () {
        return THREE.Matrix4.__v1.set(this.n11, this.n21, this.n31)
    },
    getColumnY: function () {
        return THREE.Matrix4.__v1.set(this.n12,
            this.n22, this.n32)
    },
    getColumnZ: function () {
        return THREE.Matrix4.__v1.set(this.n13, this.n23, this.n33)
    },
    getInverse: function (a) {
        var c = a.n11,
            b = a.n12,
            d = a.n13,
            g = a.n14,
            e = a.n21,
            f = a.n22,
            h = a.n23,
            i = a.n24,
            l = a.n31,
            k = a.n32,
            p = a.n33,
            q = a.n34,
            m = a.n41,
            t = a.n42,
            n = a.n43,
            o = a.n44;
        this.n11 = h * q * t - i * p * t + i * k * n - f * q * n - h * k * o + f * p * o;
        this.n12 = g * p * t - d * q * t - g * k * n + b * q * n + d * k * o - b * p * o;
        this.n13 = d * i * t - g * h * t + g * f * n - b * i * n - d * f * o + b * h * o;
        this.n14 = g * h * k - d * i * k - g * f * p + b * i * p + d * f * q - b * h * q;
        this.n21 = i * p * m - h * q * m - i * l * n + e * q * n + h * l * o - e * p * o;
        this.n22 = d * q * m - g * p * m +
            g * l * n - c * q * n - d * l * o + c * p * o;
        this.n23 = g * h * m - d * i * m - g * e * n + c * i * n + d * e * o - c * h * o;
        this.n24 = d * i * l - g * h * l + g * e * p - c * i * p - d * e * q + c * h * q;
        this.n31 = f * q * m - i * k * m + i * l * t - e * q * t - f * l * o + e * k * o;
        this.n32 = g * k * m - b * q * m - g * l * t + c * q * t + b * l * o - c * k * o;
        this.n33 = d * i * m - g * f * m + g * e * t - c * i * t - b * e * o + c * f * o;
        this.n34 = g * f * l - b * i * l - g * e * k + c * i * k + b * e * q - c * f * q;
        this.n41 = h * k * m - f * p * m - h * l * t + e * p * t + f * l * n - e * k * n;
        this.n42 = b * p * m - d * k * m + d * l * t - c * p * t - b * l * n + c * k * n;
        this.n43 = d * f * m - b * h * m - d * e * t + c * h * t + b * e * n - c * f * n;
        this.n44 = b * h * l - d * f * l + d * e * k - c * h * k - b * e * p + c * f * p;
        this.multiplyScalar(1 / a.determinant());
        return this
    },
    setRotationFromEuler: function (a, c) {
        var b = a.x,
            d = a.y,
            g = a.z,
            e = Math.cos(b),
            b = Math.sin(b),
            f = Math.cos(d),
            d = Math.sin(d),
            h = Math.cos(g),
            g = Math.sin(g);
        switch (c) {
        case "YXZ":
            var i = f * h,
                l = f * g,
                k = d * h,
                p = d * g;
            this.n11 = i + p * b;
            this.n12 = k * b - l;
            this.n13 = e * d;
            this.n21 = e * g;
            this.n22 = e * h;
            this.n23 = -b;
            this.n31 = l * b - k;
            this.n32 = p + i * b;
            this.n33 = e * f;
            break;
        case "ZXY":
            i = f * h;
            l = f * g;
            k = d * h;
            p = d * g;
            this.n11 = i - p * b;
            this.n12 = -e * g;
            this.n13 = k + l * b;
            this.n21 = l + k * b;
            this.n22 = e * h;
            this.n23 = p - i * b;
            this.n31 = -e * d;
            this.n32 = b;
            this.n33 = e * f;
            break;
        case "ZYX":
            i =
                e * h;
            l = e * g;
            k = b * h;
            p = b * g;
            this.n11 = f * h;
            this.n12 = k * d - l;
            this.n13 = i * d + p;
            this.n21 = f * g;
            this.n22 = p * d + i;
            this.n23 = l * d - k;
            this.n31 = -d;
            this.n32 = b * f;
            this.n33 = e * f;
            break;
        case "YZX":
            i = e * f;
            l = e * d;
            k = b * f;
            p = b * d;
            this.n11 = f * h;
            this.n12 = p - i * g;
            this.n13 = k * g + l;
            this.n21 = g;
            this.n22 = e * h;
            this.n23 = -b * h;
            this.n31 = -d * h;
            this.n32 = l * g + k;
            this.n33 = i - p * g;
            break;
        case "XZY":
            i = e * f;
            l = e * d;
            k = b * f;
            p = b * d;
            this.n11 = f * h;
            this.n12 = -g;
            this.n13 = d * h;
            this.n21 = i * g + p;
            this.n22 = e * h;
            this.n23 = l * g - k;
            this.n31 = k * g - l;
            this.n32 = b * h;
            this.n33 = p * g + i;
            break;
        default:
            i = e * h, l = e *
                g, k = b * h, p = b * g, this.n11 = f * h, this.n12 = -f * g, this.n13 = d, this.n21 = l + k * d, this.n22 = i - p * d, this.n23 = -b * f, this.n31 = p - i * d, this.n32 = k + l * d, this.n33 = e * f
        }
        return this
    },
    setRotationFromQuaternion: function (a) {
        var c = a.x,
            b = a.y,
            d = a.z,
            g = a.w,
            e = c + c,
            f = b + b,
            h = d + d,
            a = c * e,
            i = c * f;
        c *= h;
        var l = b * f;
        b *= h;
        d *= h;
        e *= g;
        f *= g;
        g *= h;
        this.n11 = 1 - (l + d);
        this.n12 = i - g;
        this.n13 = c + f;
        this.n21 = i + g;
        this.n22 = 1 - (a + d);
        this.n23 = b - e;
        this.n31 = c - f;
        this.n32 = b + e;
        this.n33 = 1 - (a + l);
        return this
    },
    scale: function (a) {
        var c = a.x,
            b = a.y,
            a = a.z;
        this.n11 *= c;
        this.n12 *= b;
        this.n13 *=
            a;
        this.n21 *= c;
        this.n22 *= b;
        this.n23 *= a;
        this.n31 *= c;
        this.n32 *= b;
        this.n33 *= a;
        this.n41 *= c;
        this.n42 *= b;
        this.n43 *= a;
        return this
    },
    compose: function (a, c, b) {
        var d = THREE.Matrix4.__m1,
            g = THREE.Matrix4.__m2;
        d.identity();
        d.setRotationFromQuaternion(c);
        g.setScale(b.x, b.y, b.z);
        this.multiply(d, g);
        this.n14 = a.x;
        this.n24 = a.y;
        this.n34 = a.z;
        return this
    },
    decompose: function (a, c, b) {
        var d = THREE.Matrix4.__v1,
            g = THREE.Matrix4.__v2,
            e = THREE.Matrix4.__v3;
        d.set(this.n11, this.n21, this.n31);
        g.set(this.n12, this.n22, this.n32);
        e.set(this.n13,
            this.n23, this.n33);
        a = a instanceof THREE.Vector3 ? a : new THREE.Vector3;
        c = c instanceof THREE.Quaternion ? c : new THREE.Quaternion;
        b = b instanceof THREE.Vector3 ? b : new THREE.Vector3;
        b.x = d.length();
        b.y = g.length();
        b.z = e.length();
        a.x = this.n14;
        a.y = this.n24;
        a.z = this.n34;
        d = THREE.Matrix4.__m1;
        d.copy(this);
        d.n11 /= b.x;
        d.n21 /= b.x;
        d.n31 /= b.x;
        d.n12 /= b.y;
        d.n22 /= b.y;
        d.n32 /= b.y;
        d.n13 /= b.z;
        d.n23 /= b.z;
        d.n33 /= b.z;
        c.setFromRotationMatrix(d);
        return [a, c, b]
    },
    extractPosition: function (a) {
        this.n14 = a.n14;
        this.n24 = a.n24;
        this.n34 = a.n34;
        return this
    },
    extractRotation: function (a) {
        var c = THREE.Matrix4.__v1,
            b = 1 / c.set(a.n11, a.n21, a.n31).length(),
            d = 1 / c.set(a.n12, a.n22, a.n32).length(),
            c = 1 / c.set(a.n13, a.n23, a.n33).length();
        this.n11 = a.n11 * b;
        this.n21 = a.n21 * b;
        this.n31 = a.n31 * b;
        this.n12 = a.n12 * d;
        this.n22 = a.n22 * d;
        this.n32 = a.n32 * d;
        this.n13 = a.n13 * c;
        this.n23 = a.n23 * c;
        this.n33 = a.n33 * c;
        return this
    }
};
THREE.Matrix4.makeInvert3x3 = function (a) {
    var c = a.m33,
        b = c.m,
        d = a.n33 * a.n22 - a.n32 * a.n23,
        g = -a.n33 * a.n21 + a.n31 * a.n23,
        e = a.n32 * a.n21 - a.n31 * a.n22,
        f = -a.n33 * a.n12 + a.n32 * a.n13,
        h = a.n33 * a.n11 - a.n31 * a.n13,
        i = -a.n32 * a.n11 + a.n31 * a.n12,
        l = a.n23 * a.n12 - a.n22 * a.n13,
        k = -a.n23 * a.n11 + a.n21 * a.n13,
        p = a.n22 * a.n11 - a.n21 * a.n12,
        a = a.n11 * d + a.n21 * f + a.n31 * l;
    a === 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
    a = 1 / a;
    b[0] = a * d;
    b[1] = a * g;
    b[2] = a * e;
    b[3] = a * f;
    b[4] = a * h;
    b[5] = a * i;
    b[6] = a * l;
    b[7] = a * k;
    b[8] = a * p;
    return c
};
THREE.Matrix4.makeFrustum = function (a, c, b, d, g, e) {
    var f;
    f = new THREE.Matrix4;
    f.n11 = 2 * g / (c - a);
    f.n12 = 0;
    f.n13 = (c + a) / (c - a);
    f.n14 = 0;
    f.n21 = 0;
    f.n22 = 2 * g / (d - b);
    f.n23 = (d + b) / (d - b);
    f.n24 = 0;
    f.n31 = 0;
    f.n32 = 0;
    f.n33 = -(e + g) / (e - g);
    f.n34 = -2 * e * g / (e - g);
    f.n41 = 0;
    f.n42 = 0;
    f.n43 = -1;
    f.n44 = 0;
    return f
};
THREE.Matrix4.makePerspective = function (a, c, b, d) {
    var g, a = b * Math.tan(a * Math.PI / 360);
    g = -a;
    return THREE.Matrix4.makeFrustum(g * c, a * c, g, a, b, d)
};
THREE.Matrix4.makeOrtho = function (a, c, b, d, g, e) {
    var f, h, i, l;
    f = new THREE.Matrix4;
    h = c - a;
    i = b - d;
    l = e - g;
    f.n11 = 2 / h;
    f.n12 = 0;
    f.n13 = 0;
    f.n14 = -((c + a) / h);
    f.n21 = 0;
    f.n22 = 2 / i;
    f.n23 = 0;
    f.n24 = -((b + d) / i);
    f.n31 = 0;
    f.n32 = 0;
    f.n33 = -2 / l;
    f.n34 = -((e + g) / l);
    f.n41 = 0;
    f.n42 = 0;
    f.n43 = 0;
    f.n44 = 1;
    return f
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.Object3D = function () {
    this.name = "";
    this.id = THREE.Object3DCount++;
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.eulerOrder = "XYZ";
    this.scale = new THREE.Vector3(1, 1, 1);
    this.flipSided = this.doubleSided = this.dynamic = !1;
    this.renderDepth = null;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.quaternion = new THREE.Quaternion;
    this.useQuaternion = !1;
    this.boundRadius = 0;
    this.boundRadiusScale = 1;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    translate: function (a, c) {
        this.matrix.rotateAxis(c);
        this.position.addSelf(c.multiplyScalar(a))
    },
    translateX: function (a) {
        this.translate(a, this._vector.set(1, 0, 0))
    },
    translateY: function (a) {
        this.translate(a, this._vector.set(0, 1, 0))
    },
    translateZ: function (a) {
        this.translate(a, this._vector.set(0, 0, 1))
    },
    lookAt: function (a) {
        this.matrix.lookAt(a, this.position, this.up);
        this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
    },
    add: function (a) {
        if (this.children.indexOf(a) === -1) {
            a.parent !== void 0 && a.parent.remove(a);
            a.parent = this;
            this.children.push(a);
            for (var c = this; c.parent !== void 0;) c = c.parent;
            c !== void 0 && c instanceof THREE.Scene && c.addObject(a)
        }
    },
    remove: function (a) {
        var c = this.children.indexOf(a);
        if (c !== -1) {
            a.parent = void 0;
            this.children.splice(c, 1);
            for (c = this; c.parent !== void 0;) c = c.parent;
            c !== void 0 && c instanceof THREE.Scene && c.removeObject(a)
        }
    },
    getChildByName: function (a, c) {
        var b, d, g;
        b = 0;
        for (d = this.children.length; b < d; b++) {
            g = this.children[b];
            if (g.name === a) return g;
            if (c && (g = g.getChildByName(a, c), g !== void 0)) return g
        }
    },
    updateMatrix: function () {
        this.matrix.setPosition(this.position);
        this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
        if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z));
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function (a) {
        this.matrixAutoUpdate &&
            this.updateMatrix();
        if (this.matrixWorldNeedsUpdate || a) this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
        for (var c = 0, b = this.children.length; c < b; c++) this.children[c].updateMatrixWorld(a)
    }
};
THREE.Object3DCount = 0;
THREE.Projector = function () {
    function a() {
        var a = f[e] = f[e] || new THREE.RenderableObject;
        e++;
        return a
    }

    function c() {
        var a = l[i] = l[i] || new THREE.RenderableVertex;
        i++;
        return a
    }

    function b(a, b) {
        return b.z - a.z
    }

    function d(a, b) {
        var c = 0,
            d = 1,
            e = a.z + a.w,
            g = b.z + b.w,
            f = -a.z + a.w,
            h = -b.z + b.w;
        return e >= 0 && g >= 0 && f >= 0 && h >= 0 ? !0 : e < 0 && g < 0 || f < 0 && h < 0 ? !1 : (e < 0 ? c = Math.max(c, e / (e - g)) : g < 0 && (d = Math.min(d, e / (e - g))), f < 0 ? c = Math.max(c, f / (f - h)) : h < 0 && (d = Math.min(d, f / (f - h))), d < c ? !1 : (a.lerpSelf(b, c), b.lerpSelf(a, 1 - d), !0))
    }
    var g, e, f = [],
        h, i, l = [],
        k, p, q = [],
        m, t = [],
        n, o, s = [],
        u, r, z = [],
        E = {
            objects: [],
            sprites: [],
            lights: [],
            elements: []
        }, G = new THREE.Vector3,
        v = new THREE.Vector4,
        w = new THREE.Matrix4,
        C = new THREE.Matrix4,
        F = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
        B = new THREE.Vector4,
        L = new THREE.Vector4;
    this.computeFrustum = function (a) {
        F[0].set(a.n41 - a.n11, a.n42 - a.n12, a.n43 - a.n13, a.n44 - a.n14);
        F[1].set(a.n41 + a.n11, a.n42 + a.n12, a.n43 + a.n13, a.n44 + a.n14);
        F[2].set(a.n41 + a.n21, a.n42 + a.n22, a.n43 +
            a.n23, a.n44 + a.n24);
        F[3].set(a.n41 - a.n21, a.n42 - a.n22, a.n43 - a.n23, a.n44 - a.n24);
        F[4].set(a.n41 - a.n31, a.n42 - a.n32, a.n43 - a.n33, a.n44 - a.n34);
        F[5].set(a.n41 + a.n31, a.n42 + a.n32, a.n43 + a.n33, a.n44 + a.n34);
        for (a = 0; a < 6; a++) {
            var b = F[a];
            b.divideScalar(Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z))
        }
    };
    this.projectVector = function (a, b) {
        b.matrixWorldInverse.getInverse(b.matrixWorld);
        w.multiply(b.projectionMatrix, b.matrixWorldInverse);
        w.multiplyVector3(a);
        return a
    };
    this.unprojectVector = function (a, b) {
        b.projectionMatrixInverse.getInverse(b.projectionMatrix);
        w.multiply(b.matrixWorld, b.projectionMatrixInverse);
        w.multiplyVector3(a);
        return a
    };
    this.pickingRay = function (a, b) {
        var c;
        a.z = -1;
        c = new THREE.Vector3(a.x, a.y, 1);
        this.unprojectVector(a, b);
        this.unprojectVector(c, b);
        c.subSelf(a).normalize();
        return new THREE.Ray(a, c)
    };
    this.projectGraph = function (c, d) {
        e = 0;
        E.objects.length = 0;
        E.sprites.length = 0;
        E.lights.length = 0;
        var f = function (b) {
            if (b.visible !== !1) {
                var c;
                if (c = b instanceof THREE.Mesh || b instanceof THREE.Line)
                    if (!(c = b.frustumCulled === !1)) a: {
                        for (var d = b.matrixWorld,
                                e = -b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), h = 0; h < 6; h++)
                            if (c = F[h].x * d.n14 + F[h].y * d.n24 + F[h].z * d.n34 + F[h].w, c <= e) {
                                c = !1;
                                break a
                            }
                        c = !0
                    }
                    c ? (w.multiplyVector3(G.copy(b.position)), g = a(), g.object = b, g.z = G.z, E.objects.push(g)) : b instanceof THREE.Sprite || b instanceof THREE.Particle ? (w.multiplyVector3(G.copy(b.position)), g = a(), g.object = b, g.z = G.z, E.sprites.push(g)) : b instanceof THREE.Light && E.lights.push(b);
                c = 0;
                for (d = b.children.length; c < d; c++) f(b.children[c])
            }
        };
        f(c);
        d &&
            E.objects.sort(b);
        return E
    };
    this.projectScene = function (a, e, g) {
        var f = e.near,
            F = e.far,
            G, x, I, O, M, j, P, ha, V, Q, K, fa, U, ia, pa, na;
        r = o = m = p = 0;
        E.elements.length = 0;
        e.parent === void 0 && (console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."), a.add(e));
        a.updateMatrixWorld();
        e.matrixWorldInverse.getInverse(e.matrixWorld);
        w.multiply(e.projectionMatrix, e.matrixWorldInverse);
        this.computeFrustum(w);
        E = this.projectGraph(a, !1);
        a = 0;
        for (G = E.objects.length; a < G; a++)
            if (V = E.objects[a].object, Q = V.matrixWorld,
                fa = V.material, i = 0, V instanceof THREE.Mesh) {
                K = V.geometry;
                U = V.geometry.materials;
                O = K.vertices;
                ia = K.faces;
                pa = K.faceVertexUvs;
                K = V.matrixRotationWorld.extractRotation(Q);
                x = 0;
                for (I = O.length; x < I; x++) h = c(), h.positionWorld.copy(O[x].position), Q.multiplyVector3(h.positionWorld), h.positionScreen.copy(h.positionWorld), w.multiplyVector4(h.positionScreen), h.positionScreen.x /= h.positionScreen.w, h.positionScreen.y /= h.positionScreen.w, h.visible = h.positionScreen.z > f && h.positionScreen.z < F;
                O = 0;
                for (x = ia.length; O < x; O++) {
                    I =
                        ia[O];
                    if (I instanceof THREE.Face3)
                        if (M = l[I.a], j = l[I.b], P = l[I.c], M.visible && j.visible && P.visible && (V.doubleSided || V.flipSided != (P.positionScreen.x - M.positionScreen.x) * (j.positionScreen.y - M.positionScreen.y) - (P.positionScreen.y - M.positionScreen.y) * (j.positionScreen.x - M.positionScreen.x) < 0)) ha = q[p] = q[p] || new THREE.RenderableFace3, p++, k = ha, k.v1.copy(M), k.v2.copy(j), k.v3.copy(P);
                        else continue;
                        else if (I instanceof THREE.Face4)
                        if (M = l[I.a], j = l[I.b], P = l[I.c], ha = l[I.d], M.visible && j.visible && P.visible && ha.visible &&
                            (V.doubleSided || V.flipSided != ((ha.positionScreen.x - M.positionScreen.x) * (j.positionScreen.y - M.positionScreen.y) - (ha.positionScreen.y - M.positionScreen.y) * (j.positionScreen.x - M.positionScreen.x) < 0 || (j.positionScreen.x - P.positionScreen.x) * (ha.positionScreen.y - P.positionScreen.y) - (j.positionScreen.y - P.positionScreen.y) * (ha.positionScreen.x - P.positionScreen.x) < 0))) na = t[m] = t[m] || new THREE.RenderableFace4, m++, k = na, k.v1.copy(M), k.v2.copy(j), k.v3.copy(P), k.v4.copy(ha);
                        else continue;
                    k.normalWorld.copy(I.normal);
                    K.multiplyVector3(k.normalWorld);
                    k.centroidWorld.copy(I.centroid);
                    Q.multiplyVector3(k.centroidWorld);
                    k.centroidScreen.copy(k.centroidWorld);
                    w.multiplyVector3(k.centroidScreen);
                    P = I.vertexNormals;
                    M = 0;
                    for (j = P.length; M < j; M++) ha = k.vertexNormalsWorld[M], ha.copy(P[M]), K.multiplyVector3(ha);
                    M = 0;
                    for (j = pa.length; M < j; M++)
                        if (na = pa[M][O]) {
                            P = 0;
                            for (ha = na.length; P < ha; P++) k.uvs[M][P] = na[P]
                        }
                    k.material = fa;
                    k.faceMaterial = I.materialIndex !== null ? U[I.materialIndex] : null;
                    k.z = k.centroidScreen.z;
                    E.elements.push(k)
                }
            } else if (V instanceof THREE.Line) {
            C.multiply(w, Q);
            O = V.geometry.vertices;
            M = c();
            M.positionScreen.copy(O[0].position);
            C.multiplyVector4(M.positionScreen);
            x = 1;
            for (I = O.length; x < I; x++)
                if (M = c(), M.positionScreen.copy(O[x].position), C.multiplyVector4(M.positionScreen), j = l[i - 2], B.copy(M.positionScreen), L.copy(j.positionScreen), d(B, L)) B.multiplyScalar(1 / B.w), L.multiplyScalar(1 / L.w), V = s[o] = s[o] || new THREE.RenderableLine, o++, n = V, n.v1.positionScreen.copy(B), n.v2.positionScreen.copy(L), n.z = Math.max(B.z, L.z), n.material = fa, E.elements.push(n)
        }
        a =
            0;
        for (G = E.sprites.length; a < G; a++)
            if (V = E.sprites[a].object, Q = V.matrixWorld, V instanceof THREE.Particle && (v.set(Q.n14, Q.n24, Q.n34, 1), w.multiplyVector4(v), v.z /= v.w, v.z > 0 && v.z < 1)) f = z[r] = z[r] || new THREE.RenderableParticle, r++, u = f, u.x = v.x / v.w, u.y = v.y / v.w, u.z = v.z, u.rotation = V.rotation.z, u.scale.x = V.scale.x * Math.abs(u.x - (v.x + e.projectionMatrix.n11) / (v.w + e.projectionMatrix.n14)), u.scale.y = V.scale.y * Math.abs(u.y - (v.y + e.projectionMatrix.n22) / (v.w + e.projectionMatrix.n24)), u.material = V.material, E.elements.push(u);
        g && E.elements.sort(b);
        return E
    }
};
THREE.Quaternion = function (a, c, b, d) {
    this.set(a || 0, c || 0, b || 0, d !== void 0 ? d : 1)
};
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    set: function (a, c, b, d) {
        this.x = a;
        this.y = c;
        this.z = b;
        this.w = d;
        return this
    },
    copy: function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w;
        return this
    },
    setFromEuler: function (a) {
        var c = Math.PI / 360,
            b = a.x * c,
            d = a.y * c,
            g = a.z * c,
            a = Math.cos(d),
            d = Math.sin(d),
            c = Math.cos(-g),
            g = Math.sin(-g),
            e = Math.cos(b),
            b = Math.sin(b),
            f = a * c,
            h = d * g;
        this.w = f * e - h * b;
        this.x = f * b + h * e;
        this.y = d * c * e + a * g * b;
        this.z = a * g * e - d * c * b;
        return this
    },
    setFromAxisAngle: function (a, c) {
        var b = c / 2,
            d = Math.sin(b);
        this.x = a.x * d;
        this.y = a.y * d;
        this.z = a.z * d;
        this.w = Math.cos(b);
        return this
    },
    setFromRotationMatrix: function (a) {
        var c = Math.pow(a.determinant(), 1 / 3);
        this.w = Math.sqrt(Math.max(0, c + a.n11 + a.n22 + a.n33)) / 2;
        this.x = Math.sqrt(Math.max(0, c + a.n11 - a.n22 - a.n33)) / 2;
        this.y = Math.sqrt(Math.max(0, c - a.n11 + a.n22 - a.n33)) / 2;
        this.z = Math.sqrt(Math.max(0, c - a.n11 - a.n22 + a.n33)) / 2;
        this.x = a.n32 - a.n23 < 0 ? -Math.abs(this.x) : Math.abs(this.x);
        this.y = a.n13 - a.n31 < 0 ? -Math.abs(this.y) : Math.abs(this.y);
        this.z = a.n21 - a.n12 < 0 ? -Math.abs(this.z) : Math.abs(this.z);
        this.normalize();
        return this
    },
    calculateW: function () {
        this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
        return this
    },
    inverse: function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    },
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function () {
        var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        a === 0 ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a);
        return this
    },
    multiplySelf: function (a) {
        var c =
            this.x,
            b = this.y,
            d = this.z,
            g = this.w,
            e = a.x,
            f = a.y,
            h = a.z,
            a = a.w;
        this.x = c * a + g * e + b * h - d * f;
        this.y = b * a + g * f + d * e - c * h;
        this.z = d * a + g * h + c * f - b * e;
        this.w = g * a - c * e - b * f - d * h;
        return this
    },
    multiply: function (a, c) {
        this.x = a.x * c.w + a.y * c.z - a.z * c.y + a.w * c.x;
        this.y = -a.x * c.z + a.y * c.w + a.z * c.x + a.w * c.y;
        this.z = a.x * c.y - a.y * c.x + a.z * c.w + a.w * c.z;
        this.w = -a.x * c.x - a.y * c.y - a.z * c.z + a.w * c.w;
        return this
    },
    multiplyVector3: function (a, c) {
        c || (c = a);
        var b = a.x,
            d = a.y,
            g = a.z,
            e = this.x,
            f = this.y,
            h = this.z,
            i = this.w,
            l = i * b + f * g - h * d,
            k = i * d + h * b - e * g,
            p = i * g + e * d - f * b,
            b = -e *
                b - f * d - h * g;
        c.x = l * i + b * -e + k * -h - p * -f;
        c.y = k * i + b * -f + p * -e - l * -h;
        c.z = p * i + b * -h + l * -f - k * -e;
        return c
    }
};
THREE.Quaternion.slerp = function (a, c, b, d) {
    var g = a.w * c.w + a.x * c.x + a.y * c.y + a.z * c.z;
    g < 0 ? (b.w = -c.w, b.x = -c.x, b.y = -c.y, b.z = -c.z, g = -g) : b.copy(c);
    if (Math.abs(g) >= 1) return b.w = a.w, b.x = a.x, b.y = a.y, b.z = a.z, b;
    var e = Math.acos(g),
        g = Math.sqrt(1 - g * g);
    if (Math.abs(g) < 0.0010) return b.w = 0.5 * (a.w + c.w), b.x = 0.5 * (a.x + c.x), b.y = 0.5 * (a.y + c.y), b.z = 0.5 * (a.z + c.z), b;
    c = Math.sin((1 - d) * e) / g;
    d = Math.sin(d * e) / g;
    b.w = a.w * c + b.w * d;
    b.x = a.x * c + b.x * d;
    b.y = a.y * c + b.y * d;
    b.z = a.z * c + b.z * d;
    return b
};
THREE.Vertex = function (a) {
    this.position = a || new THREE.Vector3
};
THREE.Face3 = function (a, c, b, d, g, e) {
    this.a = a;
    this.b = c;
    this.c = b;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = d instanceof Array ? d : [];
    this.color = g instanceof THREE.Color ? g : new THREE.Color;
    this.vertexColors = g instanceof Array ? g : [];
    this.vertexTangents = [];
    this.materialIndex = e;
    this.centroid = new THREE.Vector3
};
THREE.Face4 = function (a, c, b, d, g, e, f) {
    this.a = a;
    this.b = c;
    this.c = b;
    this.d = d;
    this.normal = g instanceof THREE.Vector3 ? g : new THREE.Vector3;
    this.vertexNormals = g instanceof Array ? g : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = e instanceof Array ? e : [];
    this.vertexTangents = [];
    this.materialIndex = f;
    this.centroid = new THREE.Vector3
};
THREE.UV = function (a, c) {
    this.u = a || 0;
    this.v = c || 0
};
THREE.UV.prototype = {
    constructor: THREE.UV,
    set: function (a, c) {
        this.u = a;
        this.v = c;
        return this
    },
    copy: function (a) {
        this.u = a.u;
        this.v = a.v;
        return this
    },
    clone: function () {
        return new THREE.UV(this.u, this.v)
    }
};
THREE.Geometry = function () {
    this.id = THREE.GeometryCount++;
    this.vertices = [];
    this.colors = [];
    this.materials = [];
    this.faces = [];
    this.faceUvs = [
        []
    ];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.dynamic = this.hasTangents = !1
};
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function (a) {
        var c = new THREE.Matrix4;
        c.extractRotation(a, new THREE.Vector3(1, 1, 1));
        for (var b = 0, d = this.vertices.length; b < d; b++) a.multiplyVector3(this.vertices[b].position);
        b = 0;
        for (d = this.faces.length; b < d; b++) {
            var g = this.faces[b];
            c.multiplyVector3(g.normal);
            for (var e = 0, f = g.vertexNormals.length; e < f; e++) c.multiplyVector3(g.vertexNormals[e]);
            a.multiplyVector3(g.centroid)
        }
    },
    computeCentroids: function () {
        var a, c, b;
        a = 0;
        for (c = this.faces.length; a <
            c; a++) b = this.faces[a], b.centroid.set(0, 0, 0), b instanceof THREE.Face3 ? (b.centroid.addSelf(this.vertices[b.a].position), b.centroid.addSelf(this.vertices[b.b].position), b.centroid.addSelf(this.vertices[b.c].position), b.centroid.divideScalar(3)) : b instanceof THREE.Face4 && (b.centroid.addSelf(this.vertices[b.a].position), b.centroid.addSelf(this.vertices[b.b].position), b.centroid.addSelf(this.vertices[b.c].position), b.centroid.addSelf(this.vertices[b.d].position), b.centroid.divideScalar(4))
    },
    computeFaceNormals: function (a) {
        var c,
            b, d, g, e, f, h = new THREE.Vector3,
            i = new THREE.Vector3;
        d = 0;
        for (g = this.faces.length; d < g; d++) {
            e = this.faces[d];
            if (a && e.vertexNormals.length) {
                h.set(0, 0, 0);
                c = 0;
                for (b = e.vertexNormals.length; c < b; c++) h.addSelf(e.vertexNormals[c]);
                h.divideScalar(3)
            } else c = this.vertices[e.a], b = this.vertices[e.b], f = this.vertices[e.c], h.sub(f.position, b.position), i.sub(c.position, b.position), h.crossSelf(i);
            h.isZero() || h.normalize();
            e.normal.copy(h)
        }
    },
    computeVertexNormals: function () {
        var a, c, b, d;
        if (this.__tmpVertices === void 0) {
            d = this.__tmpVertices =
                Array(this.vertices.length);
            a = 0;
            for (c = this.vertices.length; a < c; a++) d[a] = new THREE.Vector3;
            a = 0;
            for (c = this.faces.length; a < c; a++)
                if (b = this.faces[a], b instanceof THREE.Face3) b.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
                else if (b instanceof THREE.Face4) b.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
        } else {
            d = this.__tmpVertices;
            a = 0;
            for (c = this.vertices.length; a < c; a++) d[a].set(0, 0, 0)
        }
        a = 0;
        for (c = this.faces.length; a < c; a++) b = this.faces[a], b instanceof
        THREE.Face3 ? (d[b.a].addSelf(b.normal), d[b.b].addSelf(b.normal), d[b.c].addSelf(b.normal)) : b instanceof THREE.Face4 && (d[b.a].addSelf(b.normal), d[b.b].addSelf(b.normal), d[b.c].addSelf(b.normal), d[b.d].addSelf(b.normal));
        a = 0;
        for (c = this.vertices.length; a < c; a++) d[a].normalize();
        a = 0;
        for (c = this.faces.length; a < c; a++) b = this.faces[a], b instanceof THREE.Face3 ? (b.vertexNormals[0].copy(d[b.a]), b.vertexNormals[1].copy(d[b.b]), b.vertexNormals[2].copy(d[b.c])) : b instanceof THREE.Face4 && (b.vertexNormals[0].copy(d[b.a]),
            b.vertexNormals[1].copy(d[b.b]), b.vertexNormals[2].copy(d[b.c]), b.vertexNormals[3].copy(d[b.d]))
    },
    computeTangents: function () {
        function a(a, b, c, d, e, g, j) {
            h = a.vertices[b].position;
            i = a.vertices[c].position;
            l = a.vertices[d].position;
            k = f[e];
            p = f[g];
            q = f[j];
            m = i.x - h.x;
            t = l.x - h.x;
            n = i.y - h.y;
            o = l.y - h.y;
            s = i.z - h.z;
            u = l.z - h.z;
            r = p.u - k.u;
            z = q.u - k.u;
            E = p.v - k.v;
            G = q.v - k.v;
            v = 1 / (r * G - z * E);
            B.set((G * m - E * t) * v, (G * n - E * o) * v, (G * s - E * u) * v);
            L.set((r * t - z * m) * v, (r * o - z * n) * v, (r * u - z * s) * v);
            C[b].addSelf(B);
            C[c].addSelf(B);
            C[d].addSelf(B);
            F[b].addSelf(L);
            F[c].addSelf(L);
            F[d].addSelf(L)
        }
        var c, b, d, g, e, f, h, i, l, k, p, q, m, t, n, o, s, u, r, z, E, G, v, w, C = [],
            F = [],
            B = new THREE.Vector3,
            L = new THREE.Vector3,
            J = new THREE.Vector3,
            W = new THREE.Vector3,
            X = new THREE.Vector3;
        c = 0;
        for (b = this.vertices.length; c < b; c++) C[c] = new THREE.Vector3, F[c] = new THREE.Vector3;
        c = 0;
        for (b = this.faces.length; c < b; c++) e = this.faces[c], f = this.faceVertexUvs[0][c], e instanceof THREE.Face3 ? a(this, e.a, e.b, e.c, 0, 1, 2) : e instanceof THREE.Face4 && (a(this, e.a, e.b, e.c, 0, 1, 2), a(this, e.a, e.b, e.d, 0, 1, 3));
        var T = ["a", "b",
            "c", "d"
        ];
        c = 0;
        for (b = this.faces.length; c < b; c++) {
            e = this.faces[c];
            for (d = 0; d < e.vertexNormals.length; d++) X.copy(e.vertexNormals[d]), g = e[T[d]], w = C[g], J.copy(w), J.subSelf(X.multiplyScalar(X.dot(w))).normalize(), W.cross(e.vertexNormals[d], w), g = W.dot(F[g]), g = g < 0 ? -1 : 1, e.vertexTangents[d] = new THREE.Vector4(J.x, J.y, J.z, g)
        }
        this.hasTangents = !0
    },
    computeBoundingBox: function () {
        var a;
        if (this.vertices.length > 0) {
            this.boundingBox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y,
                    this.vertices[0].position.y
                ],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var c = 1, b = this.vertices.length; c < b; c++) {
                a = this.vertices[c];
                if (a.position.x < this.boundingBox.x[0]) this.boundingBox.x[0] = a.position.x;
                else if (a.position.x > this.boundingBox.x[1]) this.boundingBox.x[1] = a.position.x;
                if (a.position.y < this.boundingBox.y[0]) this.boundingBox.y[0] = a.position.y;
                else if (a.position.y > this.boundingBox.y[1]) this.boundingBox.y[1] = a.position.y;
                if (a.position.z < this.boundingBox.z[0]) this.boundingBox.z[0] =
                    a.position.z;
                else if (a.position.z > this.boundingBox.z[1]) this.boundingBox.z[1] = a.position.z
            }
        }
    },
    computeBoundingSphere: function () {
        for (var a = 0, c = 0, b = this.vertices.length; c < b; c++) a = Math.max(a, this.vertices[c].position.length());
        this.boundingSphere = {
            radius: a
        }
    },
    mergeVertices: function () {
        var a = {}, c = [],
            b = [],
            d, g = Math.pow(10, 4),
            e, f;
        e = 0;
        for (f = this.vertices.length; e < f; e++) d = this.vertices[e].position, d = [Math.round(d.x * g), Math.round(d.y * g), Math.round(d.z * g)].join("_"), a[d] === void 0 ? (a[d] = e, c.push(this.vertices[e]),
            b[e] = c.length - 1) : b[e] = b[a[d]];
        e = 0;
        for (f = this.faces.length; e < f; e++)
            if (a = this.faces[e], a instanceof THREE.Face3) a.a = b[a.a], a.b = b[a.b], a.c = b[a.c];
            else if (a instanceof THREE.Face4) a.a = b[a.a], a.b = b[a.b], a.c = b[a.c], a.d = b[a.d];
        this.vertices = c
    }
};
THREE.GeometryCount = 0;
THREE.Spline = function (a) {
    function c(a, b, c, d, e, g, f) {
        a = (c - a) * 0.5;
        d = (d - b) * 0.5;
        return (2 * (b - c) + a + d) * f + (-3 * (b - c) - 2 * a - d) * g + a * e + b
    }
    this.points = a;
    var b = [],
        d = {
            x: 0,
            y: 0,
            z: 0
        }, g, e, f, h, i, l, k, p, q;
    this.initFromArray = function (a) {
        this.points = [];
        for (var b = 0; b < a.length; b++) this.points[b] = {
            x: a[b][0],
            y: a[b][1],
            z: a[b][2]
        }
    };
    this.getPoint = function (a) {
        g = (this.points.length - 1) * a;
        e = Math.floor(g);
        f = g - e;
        b[0] = e === 0 ? e : e - 1;
        b[1] = e;
        b[2] = e > this.points.length - 2 ? e : e + 1;
        b[3] = e > this.points.length - 3 ? e : e + 2;
        l = this.points[b[0]];
        k = this.points[b[1]];
        p = this.points[b[2]];
        q = this.points[b[3]];
        h = f * f;
        i = f * h;
        d.x = c(l.x, k.x, p.x, q.x, f, h, i);
        d.y = c(l.y, k.y, p.y, q.y, f, h, i);
        d.z = c(l.z, k.z, p.z, q.z, f, h, i);
        return d
    };
    this.getControlPointsArray = function () {
        var a, b, c = this.points.length,
            d = [];
        for (a = 0; a < c; a++) b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    };
    this.getLength = function (a) {
        var b, c, d, e = b = b = 0,
            g = new THREE.Vector3,
            f = new THREE.Vector3,
            h = [],
            i = 0;
        h[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        g.copy(this.points[0]);
        for (a = 1; a < c; a++) b = a / c, d = this.getPoint(b), f.copy(d), i += f.distanceTo(g),
        g.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = i, e = b);
        h[h.length] = i;
        return {
            chunks: h,
            total: i
        }
    };
    this.reparametrizeByArcLength = function (a) {
        var b, c, d, e, g, f, h = [],
            i = new THREE.Vector3,
            k = this.getLength();
        h.push(i.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = k.chunks[b] - k.chunks[b - 1];
            f = Math.ceil(a * c / k.total);
            e = (b - 1) / (this.points.length - 1);
            g = b / (this.points.length - 1);
            for (c = 1; c < f - 1; c++) d = e + c * (1 / f) * (g - e), d = this.getPoint(d), h.push(i.copy(d).clone());
            h.push(i.copy(this.points[b]).clone())
        }
        this.points =
            h
    }
};
THREE.Edge = function (a, c, b, d) {
    this.vertices = [a, c];
    this.vertexIndices = [b, d];
    this.faces = [];
    this.faceIndices = []
};
THREE.Camera = function () {
    if (arguments.length) return console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."), new THREE.PerspectiveCamera(arguments[0], arguments[1], arguments[2], arguments[3]);
    THREE.Object3D.call(this);
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4;
    this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.lookAt = function (a) {
    this.matrix.lookAt(this.position, a, this.up);
    this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
};
THREE.OrthographicCamera = function (a, c, b, d, g, e) {
    THREE.Camera.call(this);
    this.left = a;
    this.right = c;
    this.top = b;
    this.bottom = d;
    this.near = g !== void 0 ? g : 0.1;
    this.far = e !== void 0 ? e : 2E3;
    this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = new THREE.Camera;
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function (a, c, b, d) {
    THREE.Camera.call(this);
    this.fov = a !== void 0 ? a : 50;
    this.aspect = c !== void 0 ? c : 1;
    this.near = b !== void 0 ? b : 0.1;
    this.far = d !== void 0 ? d : 2E3;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = new THREE.Camera;
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function (a, c) {
    this.fov = 2 * Math.atan((c !== void 0 ? c : 43.25) / (a * 2));
    this.fov *= 180 / Math.PI;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (a, c, b, d, g, e) {
    this.fullWidth = a;
    this.fullHeight = c;
    this.x = b;
    this.y = d;
    this.width = g;
    this.height = e;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    if (this.fullWidth) {
        var a = this.fullWidth / this.fullHeight,
            c = Math.tan(this.fov * Math.PI / 360) * this.near,
            b = -c,
            d = a * b,
            a = Math.abs(a * c - d),
            b = Math.abs(c - b);
        this.projectionMatrix = THREE.Matrix4.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, c - (this.y + this.height) * b / this.fullHeight, c - this.y * b / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near,
        this.far)
};
THREE.Light = function (a) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(a)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (a) {
    THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (a, c, b) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.intensity = c !== void 0 ? c : 1;
    this.distance = b !== void 0 ? b : 0
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (a, c, b) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 0, 0);
    this.intensity = c !== void 0 ? c : 1;
    this.distance = b !== void 0 ? b : 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.SpotLight = function (a, c, b, d) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = c !== void 0 ? c : 1;
    this.distance = b !== void 0 ? b : 0;
    this.castShadow = d !== void 0 ? d : !1
};
THREE.SpotLight.prototype = new THREE.Light;
THREE.SpotLight.prototype.constructor = THREE.SpotLight;
THREE.Material = function (a) {
    this.name = "";
    this.id = THREE.MaterialCount++;
    a = a || {};
    this.opacity = a.opacity !== void 0 ? a.opacity : 1;
    this.transparent = a.transparent !== void 0 ? a.transparent : !1;
    this.blending = a.blending !== void 0 ? a.blending : THREE.NormalBlending;
    this.depthTest = a.depthTest !== void 0 ? a.depthTest : !0;
    this.depthWrite = a.depthWrite !== void 0 ? a.depthWrite : !0;
    this.polygonOffset = a.polygonOffset !== void 0 ? a.polygonOffset : !1;
    this.polygonOffsetFactor = a.polygonOffsetFactor !== void 0 ? a.polygonOffsetFactor : 0;
    this.polygonOffsetUnits =
        a.polygonOffsetUnits !== void 0 ? a.polygonOffsetUnits : 0;
    this.alphaTest = a.alphaTest !== void 0 ? a.alphaTest : 0;
    this.overdraw = a.overdraw !== void 0 ? a.overdraw : !1
};
THREE.MaterialCount = 0;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.LineBasicMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.linewidth = a.linewidth !== void 0 ? a.linewidth : 1;
    this.linecap = a.linecap !== void 0 ? a.linecap : "round";
    this.linejoin = a.linejoin !== void 0 ? a.linejoin : "round";
    this.vertexColors = a.vertexColors ? a.vertexColors : !1;
    this.fog = a.fog !== void 0 ? a.fog : !0
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.map = a.map !== void 0 ? a.map : null;
    this.lightMap = a.lightMap !== void 0 ? a.lightMap : null;
    this.envMap = a.envMap !== void 0 ? a.envMap : null;
    this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
    this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
    this.refractionRatio = a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
    this.fog = a.fog !== void 0 ? a.fog : !0;
    this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
    this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
    this.wireframeLinecap = a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
    this.wireframeLinejoin = a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
    this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
    this.skinning = a.skinning !== void 0 ? a.skinning : !1;
    this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.ambient = a.ambient !== void 0 ? new THREE.Color(a.ambient) : new THREE.Color(328965);
    this.map = a.map !== void 0 ? a.map : null;
    this.lightMap = a.lightMap !== void 0 ? a.lightMap : null;
    this.envMap = a.envMap !== void 0 ? a.envMap : null;
    this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
    this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
    this.refractionRatio =
        a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
    this.fog = a.fog !== void 0 ? a.fog : !0;
    this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
    this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
    this.wireframeLinecap = a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
    this.wireframeLinejoin = a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
    this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
    this.skinning =
        a.skinning !== void 0 ? a.skinning : !1;
    this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.ambient = a.ambient !== void 0 ? new THREE.Color(a.ambient) : new THREE.Color(328965);
    this.specular = a.specular !== void 0 ? new THREE.Color(a.specular) : new THREE.Color(1118481);
    this.shininess = a.shininess !== void 0 ? a.shininess : 30;
    this.metal = a.metal !== void 0 ? a.metal : !1;
    this.perPixel = a.perPixel !== void 0 ? a.perPixel : !1;
    this.map = a.map !== void 0 ? a.map : null;
    this.lightMap =
        a.lightMap !== void 0 ? a.lightMap : null;
    this.envMap = a.envMap !== void 0 ? a.envMap : null;
    this.combine = a.combine !== void 0 ? a.combine : THREE.MultiplyOperation;
    this.reflectivity = a.reflectivity !== void 0 ? a.reflectivity : 1;
    this.refractionRatio = a.refractionRatio !== void 0 ? a.refractionRatio : 0.98;
    this.fog = a.fog !== void 0 ? a.fog : !0;
    this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
    this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
    this.wireframeLinecap =
        a.wireframeLinecap !== void 0 ? a.wireframeLinecap : "round";
    this.wireframeLinejoin = a.wireframeLinejoin !== void 0 ? a.wireframeLinejoin : "round";
    this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
    this.skinning = a.skinning !== void 0 ? a.skinning : !1;
    this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
    this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.shading = a.shading ? a.shading : THREE.FlatShading;
    this.wireframe = a.wireframe ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth ? a.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {};
THREE.MeshShaderMaterial = function (a) {
    console.warn("DEPRECATED: MeshShaderMaterial() is now ShaderMaterial().");
    return new THREE.ShaderMaterial(a)
};
THREE.ParticleBasicMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.map = a.map !== void 0 ? a.map : null;
    this.size = a.size !== void 0 ? a.size : 1;
    this.sizeAttenuation = a.sizeAttenuation !== void 0 ? a.sizeAttenuation : !0;
    this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
    this.fog = a.fog !== void 0 ? a.fog : !0
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.program = a.program !== void 0 ? a.program : function () {}
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
THREE.ParticleDOMMaterial = function (a) {
    THREE.Material.call(this);
    this.domElement = a
};
THREE.ShaderMaterial = function (a) {
    THREE.Material.call(this, a);
    a = a || {};
    this.fragmentShader = a.fragmentShader !== void 0 ? a.fragmentShader : "void main() {}";
    this.vertexShader = a.vertexShader !== void 0 ? a.vertexShader : "void main() {}";
    this.uniforms = a.uniforms !== void 0 ? a.uniforms : {};
    this.attributes = a.attributes;
    this.shading = a.shading !== void 0 ? a.shading : THREE.SmoothShading;
    this.wireframe = a.wireframe !== void 0 ? a.wireframe : !1;
    this.wireframeLinewidth = a.wireframeLinewidth !== void 0 ? a.wireframeLinewidth : 1;
    this.fog = a.fog !==
        void 0 ? a.fog : !1;
    this.lights = a.lights !== void 0 ? a.lights : !1;
    this.vertexColors = a.vertexColors !== void 0 ? a.vertexColors : !1;
    this.skinning = a.skinning !== void 0 ? a.skinning : !1;
    this.morphTargets = a.morphTargets !== void 0 ? a.morphTargets : !1
};
THREE.ShaderMaterial.prototype = new THREE.Material;
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;
THREE.Texture = function (a, c, b, d, g, e) {
    this.id = THREE.TextureCount++;
    this.image = a;
    this.mapping = c !== void 0 ? c : new THREE.UVMapping;
    this.wrapS = b !== void 0 ? b : THREE.ClampToEdgeWrapping;
    this.wrapT = d !== void 0 ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = g !== void 0 ? g : THREE.LinearFilter;
    this.minFilter = e !== void 0 ? e : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.needsUpdate = !1;
    this.onUpdate = null
};
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function () {
        var a = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
        a.offset.copy(this.offset);
        a.repeat.copy(this.repeat);
        return a
    }
};
THREE.TextureCount = 0;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.CubeReflectionMapping = function () {};
THREE.CubeRefractionMapping = function () {};
THREE.LatitudeReflectionMapping = function () {};
THREE.LatitudeRefractionMapping = function () {};
THREE.SphericalReflectionMapping = function () {};
THREE.SphericalRefractionMapping = function () {};
THREE.UVMapping = function () {};
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.DataTexture = function (a, c, b, d, g, e, f, h, i) {
    THREE.Texture.call(this, null, g, e, f, h, i);
    this.image = {
        data: a,
        width: c,
        height: b
    };
    this.format = d !== void 0 ? d : THREE.RGBAFormat
};
THREE.DataTexture.prototype = new THREE.Texture;
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.DataTexture.prototype.clone = function () {
    var a = new THREE.DataTexture(this.data.slice(0), this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    return a
};
THREE.Particle = function (a) {
    THREE.Object3D.call(this);
    this.material = a
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function (a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = c;
    this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function (a, c, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = c;
    this.type = b !== void 0 ? b : THREE.LineStrip;
    this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = c;
    if (c instanceof Array) console.warn("DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."), this.material = c[0];
    if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = a.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var b = 0; b < this.geometry.morphTargets.length; b++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[b].name] = b
    }
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
    if (this.morphTargetDictionary[a] !== void 0) return this.morphTargetDictionary[a];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
    return 0
};
THREE.Bone = function (a) {
    THREE.Object3D.call(this);
    this.skin = a;
    this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (a, c) {
    this.matrixAutoUpdate && (c |= this.updateMatrix());
    if (c || this.matrixWorldNeedsUpdate) a ? this.skinMatrix.multiply(a, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, c = !0;
    var b, d = this.children.length;
    for (b = 0; b < d; b++) this.children[b].update(this.skinMatrix, c)
};
THREE.SkinnedMesh = function (a, c) {
    THREE.Mesh.call(this, a, c);
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var b, d, g, e, f, h;
    if (this.geometry.bones !== void 0) {
        for (b = 0; b < this.geometry.bones.length; b++) g = this.geometry.bones[b], e = g.pos, f = g.rotq, h = g.scl, d = this.addBone(), d.name = g.name, d.position.set(e[0], e[1], e[2]), d.quaternion.set(f[0], f[1], f[2], f[3]), d.useQuaternion = !0, h !== void 0 ? d.scale.set(h[0], h[1], h[2]) : d.scale.set(1, 1, 1);
        for (b = 0; b < this.bones.length; b++) g = this.geometry.bones[b],
        d = this.bones[b], g.parent === -1 ? this.add(d) : this.bones[g.parent].add(d);
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.addBone = function (a) {
    a === void 0 && (a = new THREE.Bone(this));
    this.bones.push(a);
    return a
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function (a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a) this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1;
    for (var a = 0, c = this.children.length; a < c; a++) {
        var b = this.children[a];
        b instanceof THREE.Bone ? b.update(this.identityMatrix, !1) : b.updateMatrixWorld(!0)
    }
    for (var c = this.bones.length, b = this.bones, d = this.boneMatrices, a = 0; a < c; a++) b[a].skinMatrix.flattenToArrayOffset(d,
        a * 16)
};
THREE.SkinnedMesh.prototype.pose = function () {
    this.updateMatrixWorld(!0);
    for (var a, c = [], b = 0; b < this.bones.length; b++) {
        a = this.bones[b];
        var d = new THREE.Matrix4;
        d.getInverse(a.skinMatrix);
        c.push(d);
        a.skinMatrix.flattenToArrayOffset(this.boneMatrices, b * 16)
    }
    if (this.geometry.skinVerticesA === void 0) {
        this.geometry.skinVerticesA = [];
        this.geometry.skinVerticesB = [];
        for (a = 0; a < this.geometry.skinIndices.length; a++) {
            var b = this.geometry.vertices[a].position,
                g = this.geometry.skinIndices[a].x,
                e = this.geometry.skinIndices[a].y,
                d =
                    new THREE.Vector3(b.x, b.y, b.z);
            this.geometry.skinVerticesA.push(c[g].multiplyVector3(d));
            d = new THREE.Vector3(b.x, b.y, b.z);
            this.geometry.skinVerticesB.push(c[e].multiplyVector3(d));
            this.geometry.skinWeights[a].x + this.geometry.skinWeights[a].y !== 1 && (b = (1 - (this.geometry.skinWeights[a].x + this.geometry.skinWeights[a].y)) * 0.5, this.geometry.skinWeights[a].x += b, this.geometry.skinWeights[a].y += b)
        }
    }
};
THREE.MorphAnimMesh = function (a, c) {
    THREE.Mesh.call(this, a, c);
    this.duration = 1E3;
    this.mirroredLoop = !1;
    this.currentKeyframe = this.lastKeyframe = this.time = 0;
    this.direction = 1;
    this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype = new THREE.Mesh;
THREE.MorphAnimMesh.prototype.constructor = THREE.MorphAnimMesh;
THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
    var c = this.duration / (this.geometry.morphTargets.length - 1);
    this.time += this.direction * a;
    if (this.mirroredLoop) {
        if (this.time > this.duration || this.time < 0) {
            this.direction *= -1;
            if (this.time > this.duration) this.time = this.duration, this.directionBackwards = !0;
            if (this.time < 0) this.time = 0, this.directionBackwards = !1
        }
    } else this.time %= this.duration;
    a = THREE.Math.clamp(Math.floor(this.time / c), 0, this.geometry.morphTargets.length - 1);
    if (a != this.currentKeyframe) this.morphTargetInfluences[this.lastKeyframe] =
        0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a;
    c = this.time % c / c;
    this.directionBackwards && (c = 1 - c);
    this.morphTargetInfluences[this.currentKeyframe] = c;
    this.morphTargetInfluences[this.lastKeyframe] = 1 - c
};
THREE.Ribbon = function (a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = c
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.LOD = function () {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.addLevel = function (a, c) {
    c === void 0 && (c = 0);
    for (var c = Math.abs(c), b = 0; b < this.LODs.length; b++)
        if (c < this.LODs[b].visibleAtDistance) break;
    this.LODs.splice(b, 0, {
        visibleAtDistance: c,
        object3D: a
    });
    this.add(a)
};
THREE.LOD.prototype.update = function (a) {
    if (this.LODs.length > 1) {
        a.matrixWorldInverse.getInverse(a.matrixWorld);
        a = a.matrixWorldInverse;
        a = -(a.n31 * this.position.x + a.n32 * this.position.y + a.n33 * this.position.z + a.n34);
        this.LODs[0].object3D.visible = !0;
        for (var c = 1; c < this.LODs.length; c++)
            if (a >= this.LODs[c].visibleAtDistance) this.LODs[c - 1].object3D.visible = !1, this.LODs[c].object3D.visible = !0;
            else break;
        for (; c < this.LODs.length; c++) this.LODs[c].object3D.visible = !1
    }
};
THREE.Sprite = function (a) {
    THREE.Object3D.call(this);
    this.color = a.color !== void 0 ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.map = a.map instanceof THREE.Texture ? a.map : THREE.ImageUtils.loadTexture(a.map);
    this.blending = a.blending !== void 0 ? a.blending : THREE.NormalBlending;
    this.useScreenCoordinates = a.useScreenCoordinates !== void 0 ? a.useScreenCoordinates : !0;
    this.mergeWith3D = a.mergeWith3D !== void 0 ? a.mergeWith3D : !this.useScreenCoordinates;
    this.affectedByDistance = a.affectedByDistance !== void 0 ? a.affectedByDistance : !this.useScreenCoordinates;
    this.scaleByViewport = a.scaleByViewport !== void 0 ? a.scaleByViewport : !this.affectedByDistance;
    this.alignment = a.alignment instanceof THREE.Vector2 ? a.alignment : THREE.SpriteAlignment.center;
    this.rotation3d = this.rotation;
    this.rotation = 0;
    this.opacity = 1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = new THREE.Object3D;
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.updateMatrix = function () {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    if (this.scale.x !== 1 || this.scale.y !== 1) this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y);
    this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function () {
    THREE.Object3D.call(this);
    this.overrideMaterial = this.fog = null;
    this.matrixAutoUpdate = !1;
    this.objects = [];
    this.lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.addObject = function (a) {
    if (a instanceof THREE.Light) this.lights.indexOf(a) === -1 && this.lights.push(a);
    else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && this.objects.indexOf(a) === -1) {
        this.objects.push(a);
        this.__objectsAdded.push(a);
        var c = this.__objectsRemoved.indexOf(a);
        c !== -1 && this.__objectsRemoved.splice(c, 1)
    }
    for (c = 0; c < a.children.length; c++) this.addObject(a.children[c])
};
THREE.Scene.prototype.removeObject = function (a) {
    if (a instanceof THREE.Light) {
        var c = this.lights.indexOf(a);
        c !== -1 && this.lights.splice(c, 1)
    } else a instanceof THREE.Camera || (c = this.objects.indexOf(a), c !== -1 && (this.objects.splice(c, 1), this.__objectsRemoved.push(a), c = this.__objectsAdded.indexOf(a), c !== -1 && this.__objectsAdded.splice(c, 1)));
    for (c = 0; c < a.children.length; c++) this.removeObject(a.children[c])
};
THREE.Fog = function (a, c, b) {
    this.color = new THREE.Color(a);
    this.near = c !== void 0 ? c : 1;
    this.far = b !== void 0 ? b : 1E3
};
THREE.FogExp2 = function (a, c) {
    this.color = new THREE.Color(a);
    this.density = c !== void 0 ? c : 2.5E-4
};
THREE.DOMRenderer = function () {
    THREE.Renderer.call(this);
    var a = null,
        c = new THREE.Projector,
        b, d, g, e;
    this.domElement = document.createElement("div");
    this.setSize = function (a, c) {
        b = a;
        d = c;
        g = b / 2;
        e = d / 2
    };
    this.render = function (b, d) {
        var i, l, k, p, q, m, t, n;
        a = c.projectScene(b, d);
        i = 0;
        for (l = a.length; i < l; i++)
            if (q = a[i], q instanceof THREE.RenderableParticle) {
                t = q.x * g + g;
                n = q.y * e + e;
                k = 0;
                for (p = q.material.length; k < p; k++)
                    if (m = q.material[k], m instanceof THREE.ParticleDOMMaterial) m = m.domElement, m.style.left = t + "px", m.style.top = n + "px"
            }
    }
};
THREE.CanvasRenderer = function (a) {
    function c(a) {
        if (u != a) n.globalAlpha = u = a
    }

    function b(a) {
        if (r != a) {
            switch (a) {
            case THREE.NormalBlending:
                n.globalCompositeOperation = "source-over";
                break;
            case THREE.AdditiveBlending:
                n.globalCompositeOperation = "lighter";
                break;
            case THREE.SubtractiveBlending:
                n.globalCompositeOperation = "darker"
            }
            r = a
        }
    }

    function d(a) {
        if (z != a) n.strokeStyle = z = a
    }

    function g(a) {
        if (E != a) n.fillStyle = E = a
    }
    var e = this,
        f, h, i, l = new THREE.Projector,
        a = a || {}, k = a.canvas !== void 0 ? a.canvas : document.createElement("canvas"),
        p, q, m, t, n = k.getContext("2d"),
        o = new THREE.Color(0),
        s = 0,
        u = 1,
        r = 0,
        z = null,
        E = null,
        G = null,
        v = null,
        w = null,
        C, F, B, L, J = new THREE.RenderableVertex,
        W = new THREE.RenderableVertex,
        X, T, ea, ba, x, I, O, M, j, P, ha, V, Q = new THREE.Color,
        K = new THREE.Color,
        fa = new THREE.Color,
        U = new THREE.Color,
        ia = new THREE.Color,
        pa = [],
        na = [],
        ka, oa, la, ma, ya, ra, sa, xa, R, A, Z = new THREE.Rectangle,
        H = new THREE.Rectangle,
        $ = new THREE.Rectangle,
        ca = !1,
        aa = new THREE.Color,
        S = new THREE.Color,
        ga = new THREE.Color,
        Y = new THREE.Vector3,
        va, N, ua, ta, da, Fa, a = 16;
    va = document.createElement("canvas");
    va.width = va.height = 2;
    N = va.getContext("2d");
    N.fillStyle = "rgba(0,0,0,1)";
    N.fillRect(0, 0, 2, 2);
    ua = N.getImageData(0, 0, 2, 2);
    ta = ua.data;
    da = document.createElement("canvas");
    da.width = da.height = a;
    Fa = da.getContext("2d");
    Fa.translate(-a / 2, -a / 2);
    Fa.scale(a, a);
    a--;
    this.domElement = k;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    };
    this.setSize = function (a, b) {
        p = a;
        q = b;
        m = Math.floor(p / 2);
        t = Math.floor(q / 2);
        k.width = p;
        k.height = q;
        Z.set(-m, -t, m, t);
        H.set(-m, -t, m, t);
        u = 1;
        r = 0;
        w = v = G =
            E = z = null
    };
    this.setClearColor = function (a, b) {
        o.copy(a);
        s = b;
        H.set(-m, -t, m, t)
    };
    this.setClearColorHex = function (a, b) {
        o.setHex(a);
        s = b;
        H.set(-m, -t, m, t)
    };
    this.clear = function () {
        n.setTransform(1, 0, 0, -1, m, t);
        H.isEmpty() || (H.minSelf(Z), H.inflate(2), s < 1 && n.clearRect(Math.floor(H.getX()), Math.floor(H.getY()), Math.floor(H.getWidth()), Math.floor(H.getHeight())), s > 0 && (b(THREE.NormalBlending), c(1), g("rgba(" + Math.floor(o.r * 255) + "," + Math.floor(o.g * 255) + "," + Math.floor(o.b * 255) + "," + s + ")"), n.fillRect(Math.floor(H.getX()),
            Math.floor(H.getY()), Math.floor(H.getWidth()), Math.floor(H.getHeight()))), H.empty())
    };
    this.render = function (a, k) {
        function q(a) {
            var b, c, d, e;
            aa.setRGB(0, 0, 0);
            S.setRGB(0, 0, 0);
            ga.setRGB(0, 0, 0);
            b = 0;
            for (c = a.length; b < c; b++) d = a[b], e = d.color, d instanceof THREE.AmbientLight ? (aa.r += e.r, aa.g += e.g, aa.b += e.b) : d instanceof THREE.DirectionalLight ? (S.r += e.r, S.g += e.g, S.b += e.b) : d instanceof THREE.PointLight && (ga.r += e.r, ga.g += e.g, ga.b += e.b)
        }

        function p(a, b, c, d) {
            var e, g, f, j, h, i;
            e = 0;
            for (g = a.length; e < g; e++) f = a[e], j = f.color,
            f instanceof THREE.DirectionalLight ? (h = f.matrixWorld.getPosition(), i = c.dot(h), i <= 0 || (i *= f.intensity, d.r += j.r * i, d.g += j.g * i, d.b += j.b * i)) : f instanceof THREE.PointLight && (h = f.matrixWorld.getPosition(), i = c.dot(Y.sub(h, b).normalize()), i <= 0 || (i *= f.distance == 0 ? 1 : 1 - Math.min(b.distanceTo(h) / f.distance, 1), i != 0 && (i *= f.intensity, d.r += j.r * i, d.g += j.g * i, d.b += j.b * i)))
        }

        function o(a, e, f) {
            c(f.opacity);
            b(f.blending);
            var j, h, i, k, l, da;
            if (f instanceof THREE.ParticleBasicMaterial) {
                if (f.map) k = f.map.image, l = k.width >> 1, da = k.height >>
                    1, f = e.scale.x * m, i = e.scale.y * t, j = f * l, h = i * da, $.set(a.x - j, a.y - h, a.x + j, a.y + h), Z.intersects($) && (n.save(), n.translate(a.x, a.y), n.rotate(-e.rotation), n.scale(f, -i), n.translate(-l, -da), n.drawImage(k, 0, 0), n.restore())
            } else f instanceof THREE.ParticleCanvasMaterial && (j = e.scale.x * m, h = e.scale.y * t, $.set(a.x - j, a.y - h, a.x + j, a.y + h), Z.intersects($) && (d(f.color.getContextStyle()), g(f.color.getContextStyle()), n.save(), n.translate(a.x, a.y), n.rotate(-e.rotation), n.scale(j, h), f.program(n), n.restore()))
        }

        function s(a, e,
            f, g) {
            c(g.opacity);
            b(g.blending);
            n.beginPath();
            n.moveTo(a.positionScreen.x, a.positionScreen.y);
            n.lineTo(e.positionScreen.x, e.positionScreen.y);
            n.closePath();
            if (g instanceof THREE.LineBasicMaterial) {
                a = g.linewidth;
                if (G != a) n.lineWidth = G = a;
                a = g.linecap;
                if (v != a) n.lineCap = v = a;
                a = g.linejoin;
                if (w != a) n.lineJoin = w = a;
                d(g.color.getContextStyle());
                n.stroke();
                $.inflate(g.linewidth * 2)
            }
        }

        function u(a, d, g, f, j, h, m, l) {
            e.info.render.vertices += 3;
            e.info.render.faces++;
            c(l.opacity);
            b(l.blending);
            X = a.positionScreen.x;
            T = a.positionScreen.y;
            ea = d.positionScreen.x;
            ba = d.positionScreen.y;
            x = g.positionScreen.x;
            I = g.positionScreen.y;
            Ea(X, T, ea, ba, x, I);
            if (l instanceof THREE.MeshBasicMaterial)
                if (l.map) l.map.mapping instanceof THREE.UVMapping && (ma = m.uvs[0], E(X, T, ea, ba, x, I, ma[f].u, ma[f].v, ma[j].u, ma[j].v, ma[h].u, ma[h].v, l.map));
                else if (l.envMap) {
                if (l.envMap.mapping instanceof THREE.SphericalReflectionMapping) a = k.matrixWorldInverse, Y.copy(m.vertexNormalsWorld[f]), ya = (Y.x * a.n11 + Y.y * a.n12 + Y.z * a.n13) * 0.5 + 0.5, ra = -(Y.x * a.n21 + Y.y * a.n22 + Y.z * a.n23) * 0.5 + 0.5,
                Y.copy(m.vertexNormalsWorld[j]), sa = (Y.x * a.n11 + Y.y * a.n12 + Y.z * a.n13) * 0.5 + 0.5, xa = -(Y.x * a.n21 + Y.y * a.n22 + Y.z * a.n23) * 0.5 + 0.5, Y.copy(m.vertexNormalsWorld[h]), R = (Y.x * a.n11 + Y.y * a.n12 + Y.z * a.n13) * 0.5 + 0.5, A = -(Y.x * a.n21 + Y.y * a.n22 + Y.z * a.n23) * 0.5 + 0.5, E(X, T, ea, ba, x, I, ya, ra, sa, xa, R, A, l.envMap)
            } else l.wireframe ? z(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : za(l.color);
            else if (l instanceof THREE.MeshLambertMaterial) l.map && !l.wireframe && (l.map.mapping instanceof THREE.UVMapping && (ma = m.uvs[0],
                E(X, T, ea, ba, x, I, ma[f].u, ma[f].v, ma[j].u, ma[j].v, ma[h].u, ma[h].v, l.map)), b(THREE.SubtractiveBlending)), ca ? !l.wireframe && l.shading == THREE.SmoothShading && m.vertexNormalsWorld.length == 3 ? (K.r = fa.r = U.r = aa.r, K.g = fa.g = U.g = aa.g, K.b = fa.b = U.b = aa.b, p(i, m.v1.positionWorld, m.vertexNormalsWorld[0], K), p(i, m.v2.positionWorld, m.vertexNormalsWorld[1], fa), p(i, m.v3.positionWorld, m.vertexNormalsWorld[2], U), K.r = Math.max(0, Math.min(l.color.r * K.r, 1)), K.g = Math.max(0, Math.min(l.color.g * K.g, 1)), K.b = Math.max(0, Math.min(l.color.b *
                K.b, 1)), fa.r = Math.max(0, Math.min(l.color.r * fa.r, 1)), fa.g = Math.max(0, Math.min(l.color.g * fa.g, 1)), fa.b = Math.max(0, Math.min(l.color.b * fa.b, 1)), U.r = Math.max(0, Math.min(l.color.r * U.r, 1)), U.g = Math.max(0, Math.min(l.color.g * U.g, 1)), U.b = Math.max(0, Math.min(l.color.b * U.b, 1)), ia.r = (fa.r + U.r) * 0.5, ia.g = (fa.g + U.g) * 0.5, ia.b = (fa.b + U.b) * 0.5, la = Ga(K, fa, U, ia), Ca(X, T, ea, ba, x, I, 0, 0, 1, 0, 0, 1, la)) : (Q.r = aa.r, Q.g = aa.g, Q.b = aa.b, p(i, m.centroidWorld, m.normalWorld, Q), Q.r = Math.max(0, Math.min(l.color.r * Q.r, 1)), Q.g = Math.max(0, Math.min(l.color.g *
                Q.g, 1)), Q.b = Math.max(0, Math.min(l.color.b * Q.b, 1)), l.wireframe ? z(Q, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : za(Q)) : l.wireframe ? z(l.color, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : za(l.color);
            else if (l instanceof THREE.MeshDepthMaterial) ka = k.near, oa = k.far, K.r = K.g = K.b = 1 - Ba(a.positionScreen.z, ka, oa), fa.r = fa.g = fa.b = 1 - Ba(d.positionScreen.z, ka, oa), U.r = U.g = U.b = 1 - Ba(g.positionScreen.z, ka, oa), ia.r = (fa.r + U.r) * 0.5, ia.g = (fa.g + U.g) * 0.5, ia.b = (fa.b + U.b) * 0.5, la = Ga(K, fa, U, ia),
            Ca(X, T, ea, ba, x, I, 0, 0, 1, 0, 0, 1, la);
            else if (l instanceof THREE.MeshNormalMaterial) Q.r = Da(m.normalWorld.x), Q.g = Da(m.normalWorld.y), Q.b = Da(m.normalWorld.z), l.wireframe ? z(Q, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) : za(Q)
        }

        function r(a, d, g, f, h, l, m, n, da) {
            e.info.render.vertices += 4;
            e.info.render.faces++;
            c(n.opacity);
            b(n.blending);
            if (n.map || n.envMap) u(a, d, f, 0, 1, 3, m, n, da), u(h, g, l, 1, 2, 3, m, n, da);
            else if (X = a.positionScreen.x, T = a.positionScreen.y, ea = d.positionScreen.x, ba = d.positionScreen.y, x = g.positionScreen.x,
                I = g.positionScreen.y, O = f.positionScreen.x, M = f.positionScreen.y, j = h.positionScreen.x, P = h.positionScreen.y, ha = l.positionScreen.x, V = l.positionScreen.y, n instanceof THREE.MeshBasicMaterial) Ha(X, T, ea, ba, x, I, O, M), n.wireframe ? z(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : za(n.color);
            else if (n instanceof THREE.MeshLambertMaterial) ca ? !n.wireframe && n.shading == THREE.SmoothShading && m.vertexNormalsWorld.length == 4 ? (K.r = fa.r = U.r = ia.r = aa.r, K.g = fa.g = U.g = ia.g = aa.g, K.b = fa.b = U.b = ia.b = aa.b, p(i,
                    m.v1.positionWorld, m.vertexNormalsWorld[0], K), p(i, m.v2.positionWorld, m.vertexNormalsWorld[1], fa), p(i, m.v4.positionWorld, m.vertexNormalsWorld[3], U), p(i, m.v3.positionWorld, m.vertexNormalsWorld[2], ia), K.r = Math.max(0, Math.min(n.color.r * K.r, 1)), K.g = Math.max(0, Math.min(n.color.g * K.g, 1)), K.b = Math.max(0, Math.min(n.color.b * K.b, 1)), fa.r = Math.max(0, Math.min(n.color.r * fa.r, 1)), fa.g = Math.max(0, Math.min(n.color.g * fa.g, 1)), fa.b = Math.max(0, Math.min(n.color.b * fa.b, 1)), U.r = Math.max(0, Math.min(n.color.r * U.r, 1)), U.g =
                Math.max(0, Math.min(n.color.g * U.g, 1)), U.b = Math.max(0, Math.min(n.color.b * U.b, 1)), ia.r = Math.max(0, Math.min(n.color.r * ia.r, 1)), ia.g = Math.max(0, Math.min(n.color.g * ia.g, 1)), ia.b = Math.max(0, Math.min(n.color.b * ia.b, 1)), la = Ga(K, fa, U, ia), Ea(X, T, ea, ba, O, M), Ca(X, T, ea, ba, O, M, 0, 0, 1, 0, 0, 1, la), Ea(j, P, x, I, ha, V), Ca(j, P, x, I, ha, V, 1, 0, 1, 1, 0, 1, la)) : (Q.r = aa.r, Q.g = aa.g, Q.b = aa.b, p(i, m.centroidWorld, m.normalWorld, Q), Q.r = Math.max(0, Math.min(n.color.r * Q.r, 1)), Q.g = Math.max(0, Math.min(n.color.g * Q.g, 1)), Q.b = Math.max(0, Math.min(n.color.b *
                Q.b, 1)), Ha(X, T, ea, ba, x, I, O, M), n.wireframe ? z(Q, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : za(Q)) : (Ha(X, T, ea, ba, x, I, O, M), n.wireframe ? z(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : za(n.color));
            else if (n instanceof THREE.MeshNormalMaterial) Q.r = Da(m.normalWorld.x), Q.g = Da(m.normalWorld.y), Q.b = Da(m.normalWorld.z), Ha(X, T, ea, ba, x, I, O, M), n.wireframe ? z(Q, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : za(Q);
            else if (n instanceof THREE.MeshDepthMaterial) ka =
                k.near, oa = k.far, K.r = K.g = K.b = 1 - Ba(a.positionScreen.z, ka, oa), fa.r = fa.g = fa.b = 1 - Ba(d.positionScreen.z, ka, oa), U.r = U.g = U.b = 1 - Ba(f.positionScreen.z, ka, oa), ia.r = ia.g = ia.b = 1 - Ba(g.positionScreen.z, ka, oa), la = Ga(K, fa, U, ia), Ea(X, T, ea, ba, O, M), Ca(X, T, ea, ba, O, M, 0, 0, 1, 0, 0, 1, la), Ea(j, P, x, I, ha, V), Ca(j, P, x, I, ha, V, 1, 0, 1, 1, 0, 1, la)
        }

        function Ea(a, b, c, d, e, g) {
            n.beginPath();
            n.moveTo(a, b);
            n.lineTo(c, d);
            n.lineTo(e, g);
            n.lineTo(a, b);
            n.closePath()
        }

        function Ha(a, b, c, d, e, g, f, j) {
            n.beginPath();
            n.moveTo(a, b);
            n.lineTo(c, d);
            n.lineTo(e,
                g);
            n.lineTo(f, j);
            n.lineTo(a, b);
            n.closePath()
        }

        function z(a, b, c, e) {
            if (G != b) n.lineWidth = G = b;
            if (v != c) n.lineCap = v = c;
            if (w != e) n.lineJoin = w = e;
            d(a.getContextStyle());
            n.stroke();
            $.inflate(b * 2)
        }

        function za(a) {
            g(a.getContextStyle());
            n.fill()
        }

        function E(a, b, c, d, e, f, j, h, i, m, l, k, da) {
            if (da.image.width != 0) {
                if (da.needsUpdate == !0 || pa[da.id] == void 0) {
                    var p = da.wrapS == THREE.RepeatWrapping,
                        q = da.wrapT == THREE.RepeatWrapping;
                    pa[da.id] = n.createPattern(da.image, p && q ? "repeat" : p && !q ? "repeat-x" : !p && q ? "repeat-y" : "no-repeat");
                    da.needsUpdate = !1
                }
                g(pa[da.id]);
                var p = da.offset.x / da.repeat.x,
                    q = da.offset.y / da.repeat.y,
                    R = da.image.width * da.repeat.x,
                    t = da.image.height * da.repeat.y,
                    j = (j + p) * R,
                    h = (h + q) * t,
                    i = (i + p) * R,
                    m = (m + q) * t,
                    l = (l + p) * R,
                    k = (k + q) * t;
                c -= a;
                d -= b;
                e -= a;
                f -= b;
                i -= j;
                m -= h;
                l -= j;
                k -= h;
                p = i * k - l * m;
                if (p == 0) {
                    if (na[da.id] == void 0) b = document.createElement("canvas"), b.width = da.image.width, b.height = da.image.height, a = b.getContext("2d"), a.drawImage(da.image, 0, 0), na[da.id] = a.getImageData(0, 0, da.image.width, da.image.height).data, delete b;
                    b = na[da.id];
                    j = (Math.floor(j) +
                        Math.floor(h) * da.image.width) * 4;
                    Q.setRGB(b[j] / 255, b[j + 1] / 255, b[j + 2] / 255);
                    za(Q)
                } else p = 1 / p, da = (k * c - m * e) * p, m = (k * d - m * f) * p, c = (i * e - l * c) * p, d = (i * f - l * d) * p, a = a - da * j - c * h, j = b - m * j - d * h, n.save(), n.transform(da, m, c, d, a, j), n.fill(), n.restore()
            }
        }

        function Ca(a, b, c, d, e, g, f, j, h, i, m, l, k) {
            var da, p;
            da = k.width - 1;
            p = k.height - 1;
            f *= da;
            j *= p;
            h *= da;
            i *= p;
            m *= da;
            l *= p;
            c -= a;
            d -= b;
            e -= a;
            g -= b;
            h -= f;
            i -= j;
            m -= f;
            l -= j;
            p = 1 / (h * l - m * i);
            da = (l * c - i * e) * p;
            i = (l * d - i * g) * p;
            c = (h * e - m * c) * p;
            d = (h * g - m * d) * p;
            a = a - da * f - c * j;
            b = b - i * f - d * j;
            n.save();
            n.transform(da, i, c, d,
                a, b);
            n.clip();
            n.drawImage(k, 0, 0);
            n.restore()
        }

        function Ga(a, b, c, d) {
            var e = ~~ (a.r * 255),
                f = ~~ (a.g * 255),
                a = ~~ (a.b * 255),
                g = ~~ (b.r * 255),
                j = ~~ (b.g * 255),
                b = ~~ (b.b * 255),
                h = ~~ (c.r * 255),
                i = ~~ (c.g * 255),
                c = ~~ (c.b * 255),
                m = ~~ (d.r * 255),
                l = ~~ (d.g * 255),
                d = ~~ (d.b * 255);
            ta[0] = e < 0 ? 0 : e > 255 ? 255 : e;
            ta[1] = f < 0 ? 0 : f > 255 ? 255 : f;
            ta[2] = a < 0 ? 0 : a > 255 ? 255 : a;
            ta[4] = g < 0 ? 0 : g > 255 ? 255 : g;
            ta[5] = j < 0 ? 0 : j > 255 ? 255 : j;
            ta[6] = b < 0 ? 0 : b > 255 ? 255 : b;
            ta[8] = h < 0 ? 0 : h > 255 ? 255 : h;
            ta[9] = i < 0 ? 0 : i > 255 ? 255 : i;
            ta[10] = c < 0 ? 0 : c > 255 ? 255 : c;
            ta[12] = m < 0 ? 0 : m > 255 ? 255 : m;
            ta[13] = l < 0 ? 0 : l > 255 ? 255 :
                l;
            ta[14] = d < 0 ? 0 : d > 255 ? 255 : d;
            N.putImageData(ua, 0, 0);
            Fa.drawImage(va, 0, 0);
            return da
        }

        function Ba(a, b, c) {
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        }

        function Da(a) {
            a = (a + 1) * 0.5;
            return a < 0 ? 0 : a > 1 ? 1 : a
        }

        function Aa(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = c * c + d * d;
            e != 0 && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d, a.x -= c, a.y -= d)
        }
        var Ia, Ja, qa, wa;
        this.autoClear ? this.clear() : n.setTransform(1, 0, 0, -1, m, t);
        e.info.render.vertices = 0;
        e.info.render.faces = 0;
        f = l.projectScene(a, k, this.sortElements);
        h = f.elements;
        i = f.lights;
        (ca = i.length > 0) && q(i);
        Ia = 0;
        for (Ja = h.length; Ia < Ja; Ia++)
            if (qa = h[Ia], wa = qa.material, wa = wa instanceof THREE.MeshFaceMaterial ? qa.faceMaterial : wa, !(wa == null || wa.opacity == 0)) {
                $.empty();
                if (qa instanceof THREE.RenderableParticle) C = qa, C.x *= m, C.y *= t, o(C, qa, wa, a);
                else if (qa instanceof THREE.RenderableLine) C = qa.v1, F = qa.v2, C.positionScreen.x *= m, C.positionScreen.y *= t, F.positionScreen.x *= m, F.positionScreen.y *= t, $.addPoint(C.positionScreen.x, C.positionScreen.y), $.addPoint(F.positionScreen.x, F.positionScreen.y), Z.intersects($) && s(C, F, qa,
                    wa, a);
                else if (qa instanceof THREE.RenderableFace3) C = qa.v1, F = qa.v2, B = qa.v3, C.positionScreen.x *= m, C.positionScreen.y *= t, F.positionScreen.x *= m, F.positionScreen.y *= t, B.positionScreen.x *= m, B.positionScreen.y *= t, wa.overdraw && (Aa(C.positionScreen, F.positionScreen), Aa(F.positionScreen, B.positionScreen), Aa(B.positionScreen, C.positionScreen)), $.add3Points(C.positionScreen.x, C.positionScreen.y, F.positionScreen.x, F.positionScreen.y, B.positionScreen.x, B.positionScreen.y), Z.intersects($) && u(C, F, B, 0, 1, 2, qa, wa, a);
                else if (qa instanceof THREE.RenderableFace4) C = qa.v1, F = qa.v2, B = qa.v3, L = qa.v4, C.positionScreen.x *= m, C.positionScreen.y *= t, F.positionScreen.x *= m, F.positionScreen.y *= t, B.positionScreen.x *= m, B.positionScreen.y *= t, L.positionScreen.x *= m, L.positionScreen.y *= t, J.positionScreen.copy(F.positionScreen), W.positionScreen.copy(L.positionScreen), wa.overdraw && (Aa(C.positionScreen, F.positionScreen), Aa(F.positionScreen, L.positionScreen), Aa(L.positionScreen, C.positionScreen), Aa(B.positionScreen, J.positionScreen), Aa(B.positionScreen,
                    W.positionScreen)), $.addPoint(C.positionScreen.x, C.positionScreen.y), $.addPoint(F.positionScreen.x, F.positionScreen.y), $.addPoint(B.positionScreen.x, B.positionScreen.y), $.addPoint(L.positionScreen.x, L.positionScreen.y), Z.intersects($) && r(C, F, B, L, J, W, qa, wa, a);
                H.addRectangle($)
            }
        n.setTransform(1, 0, 0, 1, 0, 0)
    }
};
THREE.SVGRenderer = function () {
    function a(a, b, c, d) {
        var e, f, g, j, h, i;
        e = 0;
        for (f = a.length; e < f; e++) g = a[e], j = g.color, g instanceof THREE.DirectionalLight ? (h = g.matrixWorld.getPosition(), i = c.dot(h), i <= 0 || (i *= g.intensity, d.r += j.r * i, d.g += j.g * i, d.b += j.b * i)) : g instanceof THREE.PointLight && (h = g.matrixWorld.getPosition(), i = c.dot(C.sub(h, b).normalize()), i <= 0 || (i *= g.distance == 0 ? 1 : 1 - Math.min(b.distanceTo(h) / g.distance, 1), i != 0 && (i *= g.intensity, d.r += j.r * i, d.g += j.g * i, d.b += j.b * i)))
    }

    function c(a) {
        F[a] == null && (F[a] = document.createElementNS("http://www.w3.org/2000/svg",
            "path"), X == 0 && F[a].setAttribute("shape-rendering", "crispEdges"));
        return F[a]
    }

    function b(a) {
        a = (a + 1) * 0.5;
        return a < 0 ? 0 : a > 1 ? 1 : a
    }
    var d = this,
        g, e, f, h = new THREE.Projector,
        i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        l, k, p, q, m, t, n, o, s = new THREE.Rectangle,
        u = new THREE.Rectangle,
        r = !1,
        z = new THREE.Color,
        E = new THREE.Color,
        G = new THREE.Color,
        v = new THREE.Color,
        w, C = new THREE.Vector3,
        F = [],
        B = [],
        L, J, W, X = 1;
    this.domElement = i;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    };
    this.setQuality = function (a) {
        switch (a) {
        case "high":
            X = 1;
            break;
        case "low":
            X = 0
        }
    };
    this.setSize = function (a, b) {
        l = a;
        k = b;
        p = l / 2;
        q = k / 2;
        i.setAttribute("viewBox", -p + " " + -q + " " + l + " " + k);
        i.setAttribute("width", l);
        i.setAttribute("height", k);
        s.set(-p, -q, p, q)
    };
    this.clear = function () {
        for (; i.childNodes.length > 0;) i.removeChild(i.childNodes[0])
    };
    this.render = function (l, k) {
        var F, x, I, O;
        this.autoClear && this.clear();
        d.info.render.vertices = 0;
        d.info.render.faces = 0;
        g = h.projectScene(l, k, this.sortElements);
        e = g.elements;
        f = g.lights;
        W = J = 0;
        if (r = f.length > 0) {
            E.setRGB(0, 0, 0);
            G.setRGB(0, 0, 0);
            v.setRGB(0, 0, 0);
            F = 0;
            for (x = f.length; F < x; F++) O = f[F], I = O.color, O instanceof THREE.AmbientLight ? (E.r += I.r, E.g += I.g, E.b += I.b) : O instanceof THREE.DirectionalLight ? (G.r += I.r, G.g += I.g, G.b += I.b) : O instanceof THREE.PointLight && (v.r += I.r, v.g += I.g, v.b += I.b)
        }
        F = 0;
        for (x = e.length; F < x; F++)
            if (I = e[F], O = I.material, O = O instanceof THREE.MeshFaceMaterial ? I.faceMaterial : O, !(O == null || O.opacity == 0))
                if (u.empty(), I instanceof THREE.RenderableParticle) m = I, m.x *=
                    p, m.y *= -q;
                else if (I instanceof THREE.RenderableLine) {
            if (m = I.v1, t = I.v2, m.positionScreen.x *= p, m.positionScreen.y *= -q, t.positionScreen.x *= p, t.positionScreen.y *= -q, u.addPoint(m.positionScreen.x, m.positionScreen.y), u.addPoint(t.positionScreen.x, t.positionScreen.y), s.intersects(u)) {
                I = m;
                var M = t,
                    j = W++;
                B[j] == null && (B[j] = document.createElementNS("http://www.w3.org/2000/svg", "line"), X == 0 && B[j].setAttribute("shape-rendering", "crispEdges"));
                L = B[j];
                L.setAttribute("x1", I.positionScreen.x);
                L.setAttribute("y1", I.positionScreen.y);
                L.setAttribute("x2", M.positionScreen.x);
                L.setAttribute("y2", M.positionScreen.y);
                O instanceof THREE.LineBasicMaterial && (L.setAttribute("style", "fill: none; stroke: " + O.color.getContextStyle() + "; stroke-width: " + O.linewidth + "; stroke-opacity: " + O.opacity + "; stroke-linecap: " + O.linecap + "; stroke-linejoin: " + O.linejoin), i.appendChild(L))
            }
        } else if (I instanceof THREE.RenderableFace3) {
            if (m = I.v1, t = I.v2, n = I.v3, m.positionScreen.x *= p, m.positionScreen.y *= -q, t.positionScreen.x *= p, t.positionScreen.y *= -q, n.positionScreen.x *=
                p, n.positionScreen.y *= -q, u.addPoint(m.positionScreen.x, m.positionScreen.y), u.addPoint(t.positionScreen.x, t.positionScreen.y), u.addPoint(n.positionScreen.x, n.positionScreen.y), s.intersects(u)) {
                var M = m,
                    j = t,
                    C = n;
                d.info.render.vertices += 3;
                d.info.render.faces++;
                L = c(J++);
                L.setAttribute("d", "M " + M.positionScreen.x + " " + M.positionScreen.y + " L " + j.positionScreen.x + " " + j.positionScreen.y + " L " + C.positionScreen.x + "," + C.positionScreen.y + "z");
                O instanceof THREE.MeshBasicMaterial ? z.copy(O.color) : O instanceof THREE.MeshLambertMaterial ?
                    r ? (z.r = E.r, z.g = E.g, z.b = E.b, a(f, I.centroidWorld, I.normalWorld, z), z.r = Math.max(0, Math.min(O.color.r * z.r, 1)), z.g = Math.max(0, Math.min(O.color.g * z.g, 1)), z.b = Math.max(0, Math.min(O.color.b * z.b, 1))) : z.copy(O.color) : O instanceof THREE.MeshDepthMaterial ? (w = 1 - O.__2near / (O.__farPlusNear - I.z * O.__farMinusNear), z.setRGB(w, w, w)) : O instanceof THREE.MeshNormalMaterial && z.setRGB(b(I.normalWorld.x), b(I.normalWorld.y), b(I.normalWorld.z));
                O.wireframe ? L.setAttribute("style", "fill: none; stroke: " + z.getContextStyle() + "; stroke-width: " +
                    O.wireframeLinewidth + "; stroke-opacity: " + O.opacity + "; stroke-linecap: " + O.wireframeLinecap + "; stroke-linejoin: " + O.wireframeLinejoin) : L.setAttribute("style", "fill: " + z.getContextStyle() + "; fill-opacity: " + O.opacity);
                i.appendChild(L)
            }
        } else if (I instanceof THREE.RenderableFace4 && (m = I.v1, t = I.v2, n = I.v3, o = I.v4, m.positionScreen.x *= p, m.positionScreen.y *= -q, t.positionScreen.x *= p, t.positionScreen.y *= -q, n.positionScreen.x *= p, n.positionScreen.y *= -q, o.positionScreen.x *= p, o.positionScreen.y *= -q, u.addPoint(m.positionScreen.x,
            m.positionScreen.y), u.addPoint(t.positionScreen.x, t.positionScreen.y), u.addPoint(n.positionScreen.x, n.positionScreen.y), u.addPoint(o.positionScreen.x, o.positionScreen.y), s.intersects(u))) {
            var M = m,
                j = t,
                C = n,
                ha = o;
            d.info.render.vertices += 4;
            d.info.render.faces++;
            L = c(J++);
            L.setAttribute("d", "M " + M.positionScreen.x + " " + M.positionScreen.y + " L " + j.positionScreen.x + " " + j.positionScreen.y + " L " + C.positionScreen.x + "," + C.positionScreen.y + " L " + ha.positionScreen.x + "," + ha.positionScreen.y + "z");
            O instanceof THREE.MeshBasicMaterial ?
                z.copy(O.color) : O instanceof THREE.MeshLambertMaterial ? r ? (z.r = E.r, z.g = E.g, z.b = E.b, a(f, I.centroidWorld, I.normalWorld, z), z.r = Math.max(0, Math.min(O.color.r * z.r, 1)), z.g = Math.max(0, Math.min(O.color.g * z.g, 1)), z.b = Math.max(0, Math.min(O.color.b * z.b, 1))) : z.copy(O.color) : O instanceof THREE.MeshDepthMaterial ? (w = 1 - O.__2near / (O.__farPlusNear - I.z * O.__farMinusNear), z.setRGB(w, w, w)) : O instanceof THREE.MeshNormalMaterial && z.setRGB(b(I.normalWorld.x), b(I.normalWorld.y), b(I.normalWorld.z));
            O.wireframe ? L.setAttribute("style",
                "fill: none; stroke: " + z.getContextStyle() + "; stroke-width: " + O.wireframeLinewidth + "; stroke-opacity: " + O.opacity + "; stroke-linecap: " + O.wireframeLinecap + "; stroke-linejoin: " + O.wireframeLinejoin) : L.setAttribute("style", "fill: " + z.getContextStyle() + "; fill-opacity: " + O.opacity);
            i.appendChild(L)
        }
    }
};
THREE.ShaderChunk = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity );\n} else {\ngl_FragColor.xyz = gl_FragColor.xyz * cubeColor.xyz;\n}\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[ 0 ].xyz, objectMatrix[ 1 ].xyz, objectMatrix[ 2 ].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
    map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
    map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
    map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
    map_fragment: "#ifdef USE_MAP\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( map, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",
    lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
    lights_lambert_pars_vertex: "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif",
    lights_lambert_vertex: "vLightWeighting = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n}\n#endif\nvLightWeighting = vLightWeighting * diffuse + ambient * ambientLightColor;",
    lights_phong_pars_vertex: "#if MAX_POINT_LIGHTS > 0\n#ifndef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
    lights_phong_vertex: "#if MAX_POINT_LIGHTS > 0\n#ifndef PHONG_PER_PIXEL\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif",
    lights_phong_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_phong_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDistance = lDistance;\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointDiffuseWeight = max( dot( normal, lVector ), 0.0 );\nfloat pointSpecularWeight = pow( pointDotNormalHalf, shininess );\n#ifdef PHYSICALLY_BASED_SHADING\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance;\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = pow( dirDotNormalHalf, shininess );\n#ifdef PHYSICALLY_BASED_SHADING\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
    default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform float shadowDarkness;\nuniform float shadowBias;\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",
    shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_SOFT\nconst float xPixelOffset = 1.0 / SHADOWMAP_WIDTH;\nconst float yPixelOffset = 1.0 / SHADOWMAP_HEIGHT;\n#endif\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nshadowCoord.z += shadowBias;\nif ( shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0 ) {\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nfor ( float y = -1.25; y <= 1.25; y += 1.25 )\nfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\nvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadow += 1.0;\n}\nshadow /= 9.0;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( shadowDarkness );\n#endif\n}\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * objectMatrix * vec4( position, 1.0 );\n}\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",
    linear_to_gamma_fragment: "#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"
};
THREE.UniformsUtils = {
    merge: function (a) {
        var c, b, d, g = {};
        for (c = 0; c < a.length; c++)
            for (b in d = this.clone(a[c]), d) g[b] = d[b];
        return g
    },
    clone: function (a) {
        var c, b, d, g = {};
        for (c in a)
            for (b in g[c] = {}, a[c]) d = a[c][b], g[c][b] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
        return g
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        lightMap: {
            type: "t",
            value: 2,
            texture: null
        },
        envMap: {
            type: "t",
            value: 1,
            texture: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        morphTargetInfluences: {
            type: "f",
            value: 0
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        }
    },
    particle: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: 6,
            texture: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        },
        shadowBias: {
            type: "f",
            value: 0.0039
        },
        shadowDarkness: {
            type: "f",
            value: 0.2
        }
    }
};
THREE.ShaderLib = {
    sprite: {
        vertexShader: "uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
        fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n}"
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}",
        fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"
    },
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.map_pars_vertex,
            THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment,
            THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(328965)
            }
        }]),
        vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex,
            THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );",
            THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
            THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, "gl_FragColor.xyz = gl_FragColor.xyz * vLightWeighting;", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            ambient: {
                type: "c",
                value: new THREE.Color(328965)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        vertexShader: ["varying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = -mvPosition.xyz;\nvec3 transformedNormal = normalMatrix * normal;\nvNormal = transformedNormal;", THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.shadowmap_vertex,
            "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment,
            THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.shadowmap_vertex, "}"
        ].join("\n"),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
        ].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.default_vertex, "}"
        ].join("\n"),
        fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"
    }
};
THREE.WebGLRenderer = function (a) {
    function c(a, b) {
        var c = a.vertices.length,
            d = b.material;
        if (d.attributes) {
            if (a.__webglCustomAttributesList === void 0) a.__webglCustomAttributesList = [];
            for (var e in d.attributes) {
                var g = d.attributes[e];
                if (!g.__webglInitialized || g.createUniqueBuffers) {
                    g.__webglInitialized = !0;
                    var f = 1;
                    g.type === "v2" ? f = 2 : g.type === "v3" ? f = 3 : g.type === "v4" ? f = 4 : g.type === "c" && (f = 3);
                    g.size = f;
                    g.array = new Float32Array(c * f);
                    g.buffer = j.createBuffer();
                    g.buffer.belongsToAttribute = e;
                    g.needsUpdate = !0
                }
                a.__webglCustomAttributesList.push(g)
            }
        }
    }

    function b(a, b) {
        if (a.material && !(a.material instanceof THREE.MeshFaceMaterial)) return a.material;
        else if (b.materialIndex >= 0) return a.geometry.materials[b.materialIndex]
    }

    function d(a, b, c) {
        var d, e, g, f, h = a.vertices;
        f = h.length;
        var i = a.colors,
            m = i.length,
            l = a.__vertexArray,
            k = a.__colorArray,
            n = a.__sortArray,
            p = a.__dirtyVertices,
            q = a.__dirtyColors,
            R = a.__webglCustomAttributesList;
        if (c.sortParticles) {
            Z.multiplySelf(c.matrixWorld);
            for (d = 0; d < f; d++) e = h[d].position, ca.copy(e), Z.multiplyVector3(ca), n[d] = [ca.z, d];
            n.sort(function (a,
                b) {
                return b[0] - a[0]
            });
            for (d = 0; d < f; d++) e = h[n[d][1]].position, g = d * 3, l[g] = e.x, l[g + 1] = e.y, l[g + 2] = e.z;
            for (d = 0; d < m; d++) g = d * 3, e = i[n[d][1]], k[g] = e.r, k[g + 1] = e.g, k[g + 2] = e.b;
            if (R) {
                i = 0;
                for (m = R.length; i < m; i++)
                    if (h = R[i], h.boundTo === void 0 || h.boundTo === "vertices")
                        if (g = 0, e = h.value.length, h.size === 1)
                            for (d = 0; d < e; d++) f = n[d][1], h.array[d] = h.value[f];
                        else if (h.size === 2)
                    for (d = 0; d < e; d++) f = n[d][1], f = h.value[f], h.array[g] = f.x, h.array[g + 1] = f.y, g += 2;
                else if (h.size === 3)
                    if (h.type === "c")
                        for (d = 0; d < e; d++) f = n[d][1], f = h.value[f],
                h.array[g] = f.r, h.array[g + 1] = f.g, h.array[g + 2] = f.b, g += 3;
                else
                    for (d = 0; d < e; d++) f = n[d][1], f = h.value[f], h.array[g] = f.x, h.array[g + 1] = f.y, h.array[g + 2] = f.z, g += 3;
                else if (h.size === 4)
                    for (d = 0; d < e; d++) f = n[d][1], f = h.value[f], h.array[g] = f.x, h.array[g + 1] = f.y, h.array[g + 2] = f.z, h.array[g + 3] = f.w, g += 4
            }
        } else {
            if (p)
                for (d = 0; d < f; d++) e = h[d].position, g = d * 3, l[g] = e.x, l[g + 1] = e.y, l[g + 2] = e.z;
            if (q)
                for (d = 0; d < m; d++) e = i[d], g = d * 3, k[g] = e.r, k[g + 1] = e.g, k[g + 2] = e.b;
            if (R) {
                i = 0;
                for (m = R.length; i < m; i++)
                    if (h = R[i], h.needsUpdate && (h.boundTo === void 0 ||
                        h.boundTo === "vertices"))
                        if (e = h.value.length, g = 0, h.size === 1)
                            for (d = 0; d < e; d++) h.array[d] = h.value[d];
                        else if (h.size === 2)
                    for (d = 0; d < e; d++) f = h.value[d], h.array[g] = f.x, h.array[g + 1] = f.y, g += 2;
                else if (h.size === 3)
                    if (h.type === "c")
                        for (d = 0; d < e; d++) f = h.value[d], h.array[g] = f.r, h.array[g + 1] = f.g, h.array[g + 2] = f.b, g += 3;
                    else
                        for (d = 0; d < e; d++) f = h.value[d], h.array[g] = f.x, h.array[g + 1] = f.y, h.array[g + 2] = f.z, g += 3;
                    else if (h.size === 4)
                    for (d = 0; d < e; d++) f = h.value[d], h.array[g] = f.x, h.array[g + 1] = f.y, h.array[g + 2] = f.z, h.array[g + 3] = f.w,
                g += 4
            }
        } if (p || c.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, a.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, l, b);
        if (q || c.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, a.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, k, b);
        if (R) {
            i = 0;
            for (m = R.length; i < m; i++)
                if (h = R[i], h.needsUpdate || c.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, h.buffer), j.bufferData(j.ARRAY_BUFFER, h.array, b)
        }
    }

    function g(a, b, c) {
        if (!a.__webglVertexBuffer) a.__webglVertexBuffer = j.createBuffer();
        if (!a.__webglNormalBuffer) a.__webglNormalBuffer = j.createBuffer();
        a.hasPos && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, a.positionArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.position), j.vertexAttribPointer(b.attributes.position, 3, j.FLOAT, !1, 0, 0));
        if (a.hasNormal) {
            j.bindBuffer(j.ARRAY_BUFFER, a.__webglNormalBuffer);
            if (c === THREE.FlatShading) {
                var d, e, g, f, h, i, m, l, k, n, p = a.count * 3;
                for (n = 0; n < p; n += 9) c = a.normalArray, d = c[n], e = c[n + 1], g = c[n + 2], f = c[n + 3], i = c[n + 4], l = c[n + 5], h = c[n + 6], m = c[n + 7], k = c[n + 8], d = (d + f + h) / 3, e = (e + i + m) / 3, g =
                    (g + l + k) / 3, c[n] = d, c[n + 1] = e, c[n + 2] = g, c[n + 3] = d, c[n + 4] = e, c[n + 5] = g, c[n + 6] = d, c[n + 7] = e, c[n + 8] = g
            }
            j.bufferData(j.ARRAY_BUFFER, a.normalArray, j.DYNAMIC_DRAW);
            j.enableVertexAttribArray(b.attributes.normal);
            j.vertexAttribPointer(b.attributes.normal, 3, j.FLOAT, !1, 0, 0)
        }
        j.drawArrays(j.TRIANGLES, 0, a.count);
        a.count = 0
    }

    function e(a, b, c, d, e, g) {
        if (d.opacity !== 0) {
            var f, h, c = o(a, b, c, d, g),
                b = c.attributes,
                a = !1,
                c = e.id * 16777215 + c.id * 2 + (d.wireframe ? 1 : 0);
            c !== K && (K = c, a = !0);
            if (!d.morphTargets && b.position >= 0) a && (j.bindBuffer(j.ARRAY_BUFFER,
                e.__webglVertexBuffer), j.vertexAttribPointer(b.position, 3, j.FLOAT, !1, 0, 0));
            else if (g.morphTargetBase) {
                c = d.program.attributes;
                g.morphTargetBase !== -1 ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[g.morphTargetBase]), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0)) : c.position >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0));
                if (g.morphTargetForcedOrder.length) {
                    f = 0;
                    var i = g.morphTargetForcedOrder;
                    for (h = g.morphTargetInfluences; f < d.numSupportedMorphTargets &&
                        f < i.length;) j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[i[f]]), j.vertexAttribPointer(c["morphTarget" + f], 3, j.FLOAT, !1, 0, 0), g.__webglMorphTargetInfluences[f] = h[i[f]], f++
                } else {
                    var i = [],
                        m = -1,
                        l = 0;
                    h = g.morphTargetInfluences;
                    var n, k = h.length;
                    f = 0;
                    for (g.morphTargetBase !== -1 && (i[g.morphTargetBase] = !0); f < d.numSupportedMorphTargets;) {
                        for (n = 0; n < k; n++)!i[n] && h[n] > m && (l = n, m = h[l]);
                        j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[l]);
                        j.vertexAttribPointer(c["morphTarget" + f], 3, j.FLOAT, !1, 0, 0);
                        g.__webglMorphTargetInfluences[f] =
                            m;
                        i[l] = 1;
                        m = -1;
                        f++
                    }
                }
                d.program.uniforms.morphTargetInfluences !== null && j.uniform1fv(d.program.uniforms.morphTargetInfluences, g.__webglMorphTargetInfluences)
            }
            if (a) {
                if (e.__webglCustomAttributesList) {
                    f = 0;
                    for (h = e.__webglCustomAttributesList.length; f < h; f++) c = e.__webglCustomAttributesList[f], b[c.buffer.belongsToAttribute] >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, c.buffer), j.vertexAttribPointer(b[c.buffer.belongsToAttribute], c.size, j.FLOAT, !1, 0, 0))
                }
                b.color >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglColorBuffer), j.vertexAttribPointer(b.color,
                    3, j.FLOAT, !1, 0, 0));
                b.normal >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglNormalBuffer), j.vertexAttribPointer(b.normal, 3, j.FLOAT, !1, 0, 0));
                b.tangent >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglTangentBuffer), j.vertexAttribPointer(b.tangent, 4, j.FLOAT, !1, 0, 0));
                b.uv >= 0 && (e.__webglUVBuffer ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUVBuffer), j.vertexAttribPointer(b.uv, 2, j.FLOAT, !1, 0, 0), j.enableVertexAttribArray(b.uv)) : j.disableVertexAttribArray(b.uv));
                b.uv2 >= 0 && (e.__webglUV2Buffer ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUV2Buffer),
                    j.vertexAttribPointer(b.uv2, 2, j.FLOAT, !1, 0, 0), j.enableVertexAttribArray(b.uv2)) : j.disableVertexAttribArray(b.uv2));
                d.skinning && b.skinVertexA >= 0 && b.skinVertexB >= 0 && b.skinIndex >= 0 && b.skinWeight >= 0 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinVertexABuffer), j.vertexAttribPointer(b.skinVertexA, 4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinVertexBBuffer), j.vertexAttribPointer(b.skinVertexB, 4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), j.vertexAttribPointer(b.skinIndex,
                    4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), j.vertexAttribPointer(b.skinWeight, 4, j.FLOAT, !1, 0, 0))
            }
            g instanceof THREE.Mesh ? (d.wireframe ? (d = d.wireframeLinewidth, d !== ya && (j.lineWidth(d), ya = d), a && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), j.drawElements(j.LINES, e.__webglLineCount, j.UNSIGNED_SHORT, 0)) : (a && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), j.drawElements(j.TRIANGLES, e.__webglFaceCount, j.UNSIGNED_SHORT, 0)), M.info.render.calls++, M.info.render.vertices +=
                e.__webglFaceCount, M.info.render.faces += e.__webglFaceCount / 3) : g instanceof THREE.Line ? (g = g.type === THREE.LineStrip ? j.LINE_STRIP : j.LINES, d = d.linewidth, d !== ya && (j.lineWidth(d), ya = d), j.drawArrays(g, 0, e.__webglLineCount), M.info.render.calls++) : g instanceof THREE.ParticleSystem ? (j.drawArrays(j.POINTS, 0, e.__webglParticleCount), M.info.render.calls++) : g instanceof THREE.Ribbon && (j.drawArrays(j.TRIANGLE_STRIP, 0, e.__webglVertexCount), M.info.render.calls++)
        }
    }

    function f(a) {
        A[0].set(a.n41 - a.n11, a.n42 - a.n12, a.n43 -
            a.n13, a.n44 - a.n14);
        A[1].set(a.n41 + a.n11, a.n42 + a.n12, a.n43 + a.n13, a.n44 + a.n14);
        A[2].set(a.n41 + a.n21, a.n42 + a.n22, a.n43 + a.n23, a.n44 + a.n24);
        A[3].set(a.n41 - a.n21, a.n42 - a.n22, a.n43 - a.n23, a.n44 - a.n24);
        A[4].set(a.n41 - a.n31, a.n42 - a.n32, a.n43 - a.n33, a.n44 - a.n34);
        A[5].set(a.n41 + a.n31, a.n42 + a.n32, a.n43 + a.n33, a.n44 + a.n34);
        for (var b, a = 0; a < 6; a++) b = A[a], b.divideScalar(Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z))
    }

    function h(a) {
        for (var b = a.matrixWorld, c = -a.geometry.boundingSphere.radius * Math.max(a.scale.x, Math.max(a.scale.y,
                a.scale.z)), d = 0; d < 6; d++)
            if (a = A[d].x * b.n14 + A[d].y * b.n24 + A[d].z * b.n34 + A[d].w, a <= c) return !1;
        return !0
    }

    function i(a, b) {
        return b.z - a.z
    }

    function l(a) {
        var b, c, d, i, m, l, n, k, p = 0,
            q = a.lights;
        S || (S = new THREE.PerspectiveCamera(M.shadowCameraFov, M.shadowMapWidth / M.shadowMapHeight, M.shadowCameraNear, M.shadowCameraFar));
        b = 0;
        for (c = q.length; b < c; b++)
            if (k = q[b], k.castShadow && k instanceof THREE.SpotLight) {
                Q = -1;
                M.shadowMap[p] || (M.shadowMap[p] = new THREE.WebGLRenderTarget(M.shadowMapWidth, M.shadowMapHeight, {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                }), ga[p] = new THREE.Matrix4);
                d = M.shadowMap[p];
                i = ga[p];
                S.position.copy(k.position);
                S.lookAt(k.target.position);
                S.parent == null && (console.warn("Camera is not on the Scene. Adding it..."), a.add(S));
                this.autoUpdateScene && a.updateMatrixWorld();
                S.matrixWorldInverse.getInverse(S.matrixWorld);
                i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
                i.multiplySelf(S.projectionMatrix);
                i.multiplySelf(S.matrixWorldInverse);
                S.matrixWorldInverse.flattenToArray($);
                S.projectionMatrix.flattenToArray(H);
                Z.multiply(S.projectionMatrix, S.matrixWorldInverse);
                f(Z);
                B(d);
                j.clearColor(1, 1, 1, 1);
                M.clear();
                j.clearColor(x.r, x.g, x.b, I);
                i = a.__webglObjects.length;
                for (d = 0; d < i; d++)
                    if (l = a.__webglObjects[d], k = l.object, l.render = !1, k.visible && k.castShadow && (!(k instanceof THREE.Mesh) || !k.frustumCulled || h(k))) k.matrixWorld.flattenToArray(k._objectMatrixArray), s(k, S, !1), l.render = !0;
                r(!0);
                G(THREE.NormalBlending);
                for (d = 0; d < i; d++)
                    if (l = a.__webglObjects[d], l.render) k = l.object, l = l.buffer, u(k), n = k.customDepthMaterial ? k.customDepthMaterial :
                        k.geometry.morphTargets.length ? va : Y, e(S, q, null, n, l, k);
                i = a.__webglObjectsImmediate.length;
                for (d = 0; d < i; d++) l = a.__webglObjectsImmediate[d], k = l.object, k.visible && k.castShadow && (k.matrixAutoUpdate && k.matrixWorld.flattenToArray(k._objectMatrixArray), K = -1, s(k, S, !1), u(k), m = o(S, q, null, Y, k), k.immediateRenderCallback ? k.immediateRenderCallback(m, j, A) : k.render(function (a) {
                    g(a, m, Y.shading)
                }));
                p++
            }
    }

    function k(a, b, c, d, g, f, h, j) {
        var i, l, k, m;
        b ? (l = a.length - 1, m = b = -1) : (l = 0, b = a.length, m = 1);
        for (var n = l; n !== b; n += m)
            if (i = a[n],
                i.render) {
                l = i.object;
                k = i.buffer;
                if (j) i = j;
                else {
                    i = i[c];
                    if (!i) continue;
                    h && G(i.blending);
                    r(i.depthTest);
                    z(i.depthWrite);
                    E(i.polygonOffset, i.polygonOffsetFactor, i.polygonOffsetUnits)
                }
                u(l);
                e(d, g, f, i, k, l)
            }
    }

    function p(a, b, c, d, e, f, h) {
        for (var i, l, k, m, n = 0, p = a.length; n < p; n++)
            if (i = a[n], l = i.object, l.visible) {
                K = -1;
                if (h) k = h;
                else {
                    k = i[b];
                    if (!k) continue;
                    f && G(k.blending);
                    r(k.depthTest);
                    z(k.depthWrite);
                    E(k.polygonOffset, k.polygonOffsetFactor, k.polygonOffsetUnits)
                }
                u(l);
                m = o(c, d, e, k, l);
                l.immediateRenderCallback ? l.immediateRenderCallback(m,
                    j, A) : l.render(function (a) {
                    g(a, m, k.shading)
                })
            }
    }

    function q(a, b, c) {
        a.push({
            buffer: b,
            object: c,
            opaque: null,
            transparent: null
        })
    }

    function m(a) {
        for (var b in a.attributes)
            if (a.attributes[b].needsUpdate) return !0;
        return !1
    }

    function t(a) {
        for (var b in a.attributes) a.attributes[b].needsUpdate = !1
    }

    function n(a, b) {
        for (var c = a.length - 1; c >= 0; c--) a[c].object === b && a.splice(c, 1)
    }

    function o(a, b, c, d, e) {
        d.program || M.initMaterial(d, b, c, e);
        if (d.morphTargets && !e.__webglMorphTargetInfluences) {
            e.__webglMorphTargetInfluences = new Float32Array(M.maxMorphTargets);
            for (var g = 0, f = M.maxMorphTargets; g < f; g++) e.__webglMorphTargetInfluences[g] = 0
        }
        var h = !1,
            g = d.program,
            f = g.uniforms,
            i = d.uniforms;
        g !== ha && (j.useProgram(g), ha = g, h = !0);
        if (d.id !== Q) Q = d.id, h = !0;
        if (h) {
            j.uniformMatrix4fv(f.projectionMatrix, !1, H);
            if (c && d.fog)
                if (i.fogColor.value = c.color, c instanceof THREE.Fog) i.fogNear.value = c.near, i.fogFar.value = c.far;
                else if (c instanceof THREE.FogExp2) i.fogDensity.value = c.density;
            if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
                for (var l,
                        k, m = 0, n = 0, p = 0, q, R, t, o = aa, Z = o.directional.colors, s = o.directional.positions, A = o.point.colors, u = o.point.positions, B = o.point.distances, r = 0, F = 0, c = l = t = 0, h = b.length; c < h; c++)
                    if (l = b[c], k = l.color, q = l.position, R = l.intensity, t = l.distance, l instanceof THREE.AmbientLight) M.gammaInput ? (m += k.r * k.r, n += k.g * k.g, p += k.b * k.b) : (m += k.r, n += k.g, p += k.b);
                    else if (l instanceof THREE.DirectionalLight) t = r * 3, M.gammaInput ? (Z[t] = k.r * k.r * R * R, Z[t + 1] = k.g * k.g * R * R, Z[t + 2] = k.b * k.b * R * R) : (Z[t] = k.r * R, Z[t + 1] = k.g * R, Z[t + 2] = k.b * R), s[t] = q.x, s[t +
                    1] = q.y, s[t + 2] = q.z, r += 1;
                else if (l instanceof THREE.SpotLight) t = r * 3, M.gammaInput ? (Z[t] = k.r * k.r * R * R, Z[t + 1] = k.g * k.g * R * R, Z[t + 2] = k.b * k.b * R * R) : (Z[t] = k.r * R, Z[t + 1] = k.g * R, Z[t + 2] = k.b * R), k = 1 / q.length(), s[t] = q.x * k, s[t + 1] = q.y * k, s[t + 2] = q.z * k, r += 1;
                else if (l instanceof THREE.PointLight) l = F * 3, M.gammaInput ? (A[l] = k.r * k.r * R * R, A[l + 1] = k.g * k.g * R * R, A[l + 2] = k.b * k.b * R * R) : (A[l] = k.r * R, A[l + 1] = k.g * R, A[l + 2] = k.b * R), u[l] = q.x, u[l + 1] = q.y, u[l + 2] = q.z, B[F] = t, F += 1;
                c = r * 3;
                for (h = Z.length; c < h; c++) Z[c] = 0;
                c = F * 3;
                for (h = A.length; c < h; c++) A[c] = 0;
                o.point.length =
                    F;
                o.directional.length = r;
                o.ambient[0] = m;
                o.ambient[1] = n;
                o.ambient[2] = p;
                b = aa;
                i.ambientLightColor.value = b.ambient;
                i.directionalLightColor.value = b.directional.colors;
                i.directionalLightDirection.value = b.directional.positions;
                i.pointLightColor.value = b.point.colors;
                i.pointLightPosition.value = b.point.positions;
                i.pointLightDistance.value = b.point.distances
            }
            if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) i.opacity.value = d.opacity, M.gammaInput ?
                i.diffuse.value.copyGammaToLinear(d.color) : i.diffuse.value = d.color, (i.map.texture = d.map) && i.offsetRepeat.value.set(d.map.offset.x, d.map.offset.y, d.map.repeat.x, d.map.repeat.y), i.lightMap.texture = d.lightMap, i.envMap.texture = d.envMap, i.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, i.reflectivity.value = d.reflectivity, i.refractionRatio.value = d.refractionRatio, i.combine.value = d.combine, i.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping;
            if (d instanceof THREE.LineBasicMaterial) i.diffuse.value = d.color, i.opacity.value = d.opacity;
            else if (d instanceof THREE.ParticleBasicMaterial) i.psColor.value = d.color, i.opacity.value = d.opacity, i.size.value = d.size, i.scale.value = W.height / 2, i.map.texture = d.map;
            else if (d instanceof THREE.MeshPhongMaterial) i.shininess.value = d.shininess, M.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.specular.value.copyGammaToLinear(d.specular)) : (i.ambient.value = d.ambient, i.specular.value = d.specular);
            else if (d instanceof THREE.MeshLambertMaterial) M.gammaInput ?
                i.ambient.value.copyGammaToLinear(d.ambient) : i.ambient.value = d.ambient;
            else if (d instanceof THREE.MeshDepthMaterial) i.mNear.value = a.near, i.mFar.value = a.far, i.opacity.value = d.opacity;
            else if (d instanceof THREE.MeshNormalMaterial) i.opacity.value = d.opacity;
            if (e.receiveShadow && !d._shadowPass && i.shadowMatrix) {
                for (b = 0; b < ga.length; b++) i.shadowMatrix.value[b] = ga[b], i.shadowMap.texture[b] = M.shadowMap[b];
                i.shadowDarkness.value = M.shadowMapDarkness;
                i.shadowBias.value = M.shadowMapBias
            }
            b = d.uniformsList;
            i = 0;
            for (c =
                b.length; i < c; i++)
                if (n = g.uniforms[b[i][1]])
                    if (m = b[i][0], p = m.type, h = m.value, p === "i") j.uniform1i(n, h);
                    else if (p === "f") j.uniform1f(n, h);
            else if (p === "v2") j.uniform2f(n, h.x, h.y);
            else if (p === "v3") j.uniform3f(n, h.x, h.y, h.z);
            else if (p === "v4") j.uniform4f(n, h.x, h.y, h.z, h.w);
            else if (p === "c") j.uniform3f(n, h.r, h.g, h.b);
            else if (p === "fv1") j.uniform1fv(n, h);
            else if (p === "fv") j.uniform3fv(n, h);
            else if (p === "v3v") {
                if (!m._array) m._array = new Float32Array(3 * h.length);
                p = 0;
                for (q = h.length; p < q; p++) o = p * 3, m._array[o] = h[p].x, m._array[o +
                    1] = h[p].y, m._array[o + 2] = h[p].z;
                j.uniform3fv(n, m._array)
            } else if (p === "m4") {
                if (!m._array) m._array = new Float32Array(16);
                h.flattenToArray(m._array);
                j.uniformMatrix4fv(n, !1, m._array)
            } else if (p === "m4v") {
                if (!m._array) m._array = new Float32Array(16 * h.length);
                p = 0;
                for (q = h.length; p < q; p++) h[p].flattenToArrayOffset(m._array, p * 16);
                j.uniformMatrix4fv(n, !1, m._array)
            } else if (p === "t") {
                if (j.uniform1i(n, h), n = m.texture)
                    if (n.image instanceof Array && n.image.length === 6) {
                        if (m = n, m.image.length === 6)
                            if (m.needsUpdate) {
                                if (!m.image.__webglTextureCube) m.image.__webglTextureCube =
                                    j.createTexture();
                                j.activeTexture(j.TEXTURE0 + h);
                                j.bindTexture(j.TEXTURE_CUBE_MAP, m.image.__webglTextureCube);
                                h = w(j.TEXTURE_CUBE_MAP, m, m.image[0]);
                                for (n = 0; n < 6; n++) j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, j.RGBA, j.RGBA, j.UNSIGNED_BYTE, m.image[n]);
                                h && j.generateMipmap(j.TEXTURE_CUBE_MAP);
                                m.needsUpdate = !1
                            } else j.activeTexture(j.TEXTURE0 + h), j.bindTexture(j.TEXTURE_CUBE_MAP, m.image.__webglTextureCube)
                    } else n instanceof THREE.WebGLRenderTargetCube ? (m = n, j.activeTexture(j.TEXTURE0 + h), j.bindTexture(j.TEXTURE_CUBE_MAP,
                        m.__webglTexture)) : C(n, h)
            } else if (p === "tv") {
                if (!m._array) {
                    m._array = [];
                    p = 0;
                    for (q = m.texture.length; p < q; p++) m._array[p] = h + p
                }
                j.uniform1iv(n, m._array);
                p = 0;
                for (q = m.texture.length; p < q; p++)(n = m.texture[p]) && C(n, m._array[p])
            }(d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && f.cameraPosition !== null && j.uniform3f(f.cameraPosition, a.position.x, a.position.y, a.position.z);
            (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial ||
                d.skinning) && f.viewMatrix !== null && j.uniformMatrix4fv(f.viewMatrix, !1, $);
            d.skinning && (j.uniformMatrix4fv(f.cameraInverseMatrix, !1, $), j.uniformMatrix4fv(f.boneGlobalMatrices, !1, e.boneMatrices))
        }
        j.uniformMatrix4fv(f.modelViewMatrix, !1, e._modelViewMatrixArray);
        f.normalMatrix && j.uniformMatrix3fv(f.normalMatrix, !1, e._normalMatrixArray);
        (d instanceof THREE.ShaderMaterial || d.envMap || d.skinning || e.receiveShadow) && f.objectMatrix !== null && j.uniformMatrix4fv(f.objectMatrix, !1, e._objectMatrixArray);
        return g
    }

    function s(a,
        b, c) {
        a._modelViewMatrix.multiplyToArray(b.matrixWorldInverse, a.matrixWorld, a._modelViewMatrixArray);
        c && THREE.Matrix4.makeInvert3x3(a._modelViewMatrix).transposeIntoArray(a._normalMatrixArray)
    }

    function u(a) {
        if (U !== a.doubleSided) a.doubleSided ? j.disable(j.CULL_FACE) : j.enable(j.CULL_FACE), U = a.doubleSided;
        if (ia !== a.flipSided) a.flipSided ? j.frontFace(j.CW) : j.frontFace(j.CCW), ia = a.flipSided
    }

    function r(a) {
        na !== a && (a ? j.enable(j.DEPTH_TEST) : j.disable(j.DEPTH_TEST), na = a)
    }

    function z(a) {
        ka !== a && (j.depthMask(a),
            ka = a)
    }

    function E(a, b, c) {
        oa !== a && (a ? j.enable(j.POLYGON_OFFSET_FILL) : j.disable(j.POLYGON_OFFSET_FILL), oa = a);
        if (a && (la !== b || ma !== c)) j.polygonOffset(b, c), la = b, ma = c
    }

    function G(a) {
        if (a !== pa) {
            switch (a) {
            case THREE.AdditiveBlending:
                j.blendEquation(j.FUNC_ADD);
                j.blendFunc(j.SRC_ALPHA, j.ONE);
                break;
            case THREE.SubtractiveBlending:
                j.blendEquation(j.FUNC_ADD);
                j.blendFunc(j.ZERO, j.ONE_MINUS_SRC_COLOR);
                break;
            case THREE.MultiplyBlending:
                j.blendEquation(j.FUNC_ADD);
                j.blendFunc(j.ZERO, j.SRC_COLOR);
                break;
            default:
                j.blendEquationSeparate(j.FUNC_ADD,
                    j.FUNC_ADD), j.blendFuncSeparate(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA, j.ONE, j.ONE_MINUS_SRC_ALPHA)
            }
            pa = a
        }
    }

    function v(a, b) {
        var c;
        a === "fragment" ? c = j.createShader(j.FRAGMENT_SHADER) : a === "vertex" && (c = j.createShader(j.VERTEX_SHADER));
        j.shaderSource(c, b);
        j.compileShader(c);
        if (!j.getShaderParameter(c, j.COMPILE_STATUS)) return console.error(j.getShaderInfoLog(c)), console.error(b), null;
        return c
    }

    function w(a, b, c) {
        return (c.width & c.width - 1) === 0 && (c.height & c.height - 1) === 0 ? (j.texParameteri(a, j.TEXTURE_WRAP_S, J(b.wrapS)),
            j.texParameteri(a, j.TEXTURE_WRAP_T, J(b.wrapT)), j.texParameteri(a, j.TEXTURE_MAG_FILTER, J(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, J(b.minFilter)), !0) : (j.texParameteri(a, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_MAG_FILTER, L(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, L(b.minFilter)), !1)
    }

    function C(a, b) {
        if (a.needsUpdate) {
            if (!a.__webglInit) a.__webglInit = !0, a.__webglTexture = j.createTexture(), M.info.memory.textures++;
            j.activeTexture(j.TEXTURE0 + b);
            j.bindTexture(j.TEXTURE_2D, a.__webglTexture);
            var c = w(j.TEXTURE_2D, a, a.image);
            a instanceof THREE.DataTexture ? j.texImage2D(j.TEXTURE_2D, 0, J(a.format), a.image.width, a.image.height, 0, J(a.format), j.UNSIGNED_BYTE, a.image.data) : j.texImage2D(j.TEXTURE_2D, 0, j.RGBA, j.RGBA, j.UNSIGNED_BYTE, a.image);
            c && j.generateMipmap(j.TEXTURE_2D);
            a.needsUpdate = !1;
            if (a.onUpdated) a.onUpdated()
        } else j.activeTexture(j.TEXTURE0 + b), j.bindTexture(j.TEXTURE_2D, a.__webglTexture)
    }

    function F(a, b) {
        j.bindRenderbuffer(j.RENDERBUFFER,
            a);
        b.depthBuffer && !b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_COMPONENT16, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_STENCIL, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a)) : j.renderbufferStorage(j.RENDERBUFFER, j.RGBA4, b.width, b.height)
    }

    function B(a) {
        var b = a instanceof THREE.WebGLRenderTargetCube;
        if (a && !a.__webglFramebuffer) {
            if (a.depthBuffer === void 0) a.depthBuffer = !0;
            if (a.stencilBuffer === void 0) a.stencilBuffer = !0;
            a.__webglTexture = j.createTexture();
            if (b) {
                a.__webglFramebuffer = [];
                a.__webglRenderbuffer = [];
                j.bindTexture(j.TEXTURE_CUBE_MAP, a.__webglTexture);
                w(j.TEXTURE_CUBE_MAP, a, a);
                for (var c = 0; c < 6; c++) {
                    a.__webglFramebuffer[c] = j.createFramebuffer();
                    a.__webglRenderbuffer[c] = j.createRenderbuffer();
                    j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, J(a.format), a.width, a.height, 0, J(a.format), J(a.type),
                        null);
                    var d = a,
                        e = j.TEXTURE_CUBE_MAP_POSITIVE_X + c;
                    j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer[c]);
                    j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, e, d.__webglTexture, 0);
                    F(a.__webglRenderbuffer[c], a)
                }
            } else a.__webglFramebuffer = j.createFramebuffer(), a.__webglRenderbuffer = j.createRenderbuffer(), j.bindTexture(j.TEXTURE_2D, a.__webglTexture), w(j.TEXTURE_2D, a, a), j.texImage2D(j.TEXTURE_2D, 0, J(a.format), a.width, a.height, 0, J(a.format), J(a.type), null), c = j.TEXTURE_2D, j.bindFramebuffer(j.FRAMEBUFFER,
                a.__webglFramebuffer), j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, c, a.__webglTexture, 0), j.bindRenderbuffer(j.RENDERBUFFER, a.__webglRenderbuffer), F(a.__webglRenderbuffer, a);
            b ? j.bindTexture(j.TEXTURE_CUBE_MAP, null) : j.bindTexture(j.TEXTURE_2D, null);
            j.bindRenderbuffer(j.RENDERBUFFER, null);
            j.bindFramebuffer(j.FRAMEBUFFER, null)
        }
        a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = xa, a = R, d = ra, e = sa);
        b !== V && (j.bindFramebuffer(j.FRAMEBUFFER, b),
            j.viewport(d, e, c, a), V = b)
    }

    function L(a) {
        switch (a) {
        case THREE.NearestFilter:
        case THREE.NearestMipMapNearestFilter:
        case THREE.NearestMipMapLinearFilter:
            return j.NEAREST;
        default:
            return j.LINEAR
        }
    }

    function J(a) {
        switch (a) {
        case THREE.RepeatWrapping:
            return j.REPEAT;
        case THREE.ClampToEdgeWrapping:
            return j.CLAMP_TO_EDGE;
        case THREE.MirroredRepeatWrapping:
            return j.MIRRORED_REPEAT;
        case THREE.NearestFilter:
            return j.NEAREST;
        case THREE.NearestMipMapNearestFilter:
            return j.NEAREST_MIPMAP_NEAREST;
        case THREE.NearestMipMapLinearFilter:
            return j.NEAREST_MIPMAP_LINEAR;
        case THREE.LinearFilter:
            return j.LINEAR;
        case THREE.LinearMipMapNearestFilter:
            return j.LINEAR_MIPMAP_NEAREST;
        case THREE.LinearMipMapLinearFilter:
            return j.LINEAR_MIPMAP_LINEAR;
        case THREE.ByteType:
            return j.BYTE;
        case THREE.UnsignedByteType:
            return j.UNSIGNED_BYTE;
        case THREE.ShortType:
            return j.SHORT;
        case THREE.UnsignedShortType:
            return j.UNSIGNED_SHORT;
        case THREE.IntType:
            return j.INT;
        case THREE.UnsignedShortType:
            return j.UNSIGNED_INT;
        case THREE.FloatType:
            return j.FLOAT;
        case THREE.AlphaFormat:
            return j.ALPHA;
        case THREE.RGBFormat:
            return j.RGB;
        case THREE.RGBAFormat:
            return j.RGBA;
        case THREE.LuminanceFormat:
            return j.LUMINANCE;
        case THREE.LuminanceAlphaFormat:
            return j.LUMINANCE_ALPHA
        }
        return 0
    }
    var a = a || {}, W = a.canvas !== void 0 ? a.canvas : document.createElement("canvas"),
        X = a.precision !== void 0 ? a.precision : "highp",
        T = a.antialias !== void 0 ? a.antialias : !1,
        ea = a.stencil !== void 0 ? a.stencil : !0,
        ba = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1,
        x = a.clearColor !== void 0 ? new THREE.Color(a.clearColor) : new THREE.Color(0),
        I = a.clearAlpha !== void 0 ? a.clearAlpha : 0,
        O = a.maxLights !== void 0 ? a.maxLights : 4;
    this.domElement = W;
    this.context = null;
    this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1;
    this.shadowMapBias = 0.0039;
    this.shadowMapDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowCameraNear = 1;
    this.shadowCameraFar = 5E3;
    this.shadowCameraFov = 50;
    this.shadowMap = [];
    this.shadowMapEnabled = !1;
    this.shadowMapSoft = this.shadowMapAutoUpdate = !0;
    this.maxMorphTargets = 8;
    this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        },
        render: {
            calls: 0,
            vertices: 0,
            faces: 0
        }
    };
    var M = this,
        j, P = [],
        ha = null,
        V = null,
        Q = -1,
        K = null,
        fa = 0,
        U = null,
        ia = null,
        pa = null,
        na = null,
        ka = null,
        oa = null,
        la = null,
        ma = null,
        ya = null,
        ra = 0,
        sa = 0,
        xa = 0,
        R = 0,
        A = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
        Z = new THREE.Matrix4,
        H = new Float32Array(16),
        $ = new Float32Array(16),
        ca = new THREE.Vector4,
        aa = {
            ambient: [0, 0, 0],
            directional: {
                length: 0,
                colors: [],
                positions: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            }
        }, S, ga = [],
        Y, va, N = {}, ua = !1;
    j = function () {
        var a;
        try {
            if (!(a = W.getContext("experimental-webgl", {
                antialias: T,
                stencil: ea,
                preserveDrawingBuffer: ba
            }))) throw "Error creating WebGL context.";
            console.log(navigator.userAgent + " | " + a.getParameter(a.VERSION) + " | " + a.getParameter(a.VENDOR) + " | " + a.getParameter(a.RENDERER) + " | " + a.getParameter(a.SHADING_LANGUAGE_VERSION))
        } catch (b) {
            console.error(b)
        }
        return a
    }();
    j.clearColor(0, 0, 0, 1);
    j.clearDepth(1);
    j.clearStencil(0);
    j.enable(j.DEPTH_TEST);
    j.depthFunc(j.LEQUAL);
    j.frontFace(j.CCW);
    j.cullFace(j.BACK);
    j.enable(j.CULL_FACE);
    j.enable(j.BLEND);
    j.blendEquation(j.FUNC_ADD);
    j.blendFunc(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA);
    j.clearColor(x.r, x.g, x.b, I);
    (function () {
        N.vertices = new Float32Array(16);
        N.faces = new Uint16Array(6);
        var a = 0;
        N.vertices[a++] = -1;
        N.vertices[a++] = -1;
        N.vertices[a++] = 0;
        N.vertices[a++] = 1;
        N.vertices[a++] = 1;
        N.vertices[a++] = -1;
        N.vertices[a++] = 1;
        N.vertices[a++] =
            1;
        N.vertices[a++] = 1;
        N.vertices[a++] = 1;
        N.vertices[a++] = 1;
        N.vertices[a++] = 0;
        N.vertices[a++] = -1;
        N.vertices[a++] = 1;
        N.vertices[a++] = 0;
        a = N.vertices[a++] = 0;
        N.faces[a++] = 0;
        N.faces[a++] = 1;
        N.faces[a++] = 2;
        N.faces[a++] = 0;
        N.faces[a++] = 2;
        N.faces[a++] = 3;
        N.vertexBuffer = j.createBuffer();
        N.elementBuffer = j.createBuffer();
        j.bindBuffer(j.ARRAY_BUFFER, N.vertexBuffer);
        j.bufferData(j.ARRAY_BUFFER, N.vertices, j.STATIC_DRAW);
        j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, N.elementBuffer);
        j.bufferData(j.ELEMENT_ARRAY_BUFFER, N.faces, j.STATIC_DRAW);
        N.program = j.createProgram();
        j.attachShader(N.program, v("fragment", THREE.ShaderLib.sprite.fragmentShader));
        j.attachShader(N.program, v("vertex", THREE.ShaderLib.sprite.vertexShader));
        j.linkProgram(N.program);
        N.attributes = {};
        N.uniforms = {};
        N.attributes.position = j.getAttribLocation(N.program, "position");
        N.attributes.uv = j.getAttribLocation(N.program, "uv");
        N.uniforms.uvOffset = j.getUniformLocation(N.program, "uvOffset");
        N.uniforms.uvScale = j.getUniformLocation(N.program, "uvScale");
        N.uniforms.rotation = j.getUniformLocation(N.program,
            "rotation");
        N.uniforms.scale = j.getUniformLocation(N.program, "scale");
        N.uniforms.alignment = j.getUniformLocation(N.program, "alignment");
        N.uniforms.color = j.getUniformLocation(N.program, "color");
        N.uniforms.map = j.getUniformLocation(N.program, "map");
        N.uniforms.opacity = j.getUniformLocation(N.program, "opacity");
        N.uniforms.useScreenCoordinates = j.getUniformLocation(N.program, "useScreenCoordinates");
        N.uniforms.affectedByDistance = j.getUniformLocation(N.program, "affectedByDistance");
        N.uniforms.screenPosition =
            j.getUniformLocation(N.program, "screenPosition");
        N.uniforms.modelViewMatrix = j.getUniformLocation(N.program, "modelViewMatrix");
        N.uniforms.projectionMatrix = j.getUniformLocation(N.program, "projectionMatrix")
    })();
    (function () {
        var a = THREE.ShaderLib.depthRGBA,
            b = THREE.UniformsUtils.clone(a.uniforms);
        Y = new THREE.ShaderMaterial({
            fragmentShader: a.fragmentShader,
            vertexShader: a.vertexShader,
            uniforms: b
        });
        va = new THREE.ShaderMaterial({
            fragmentShader: a.fragmentShader,
            vertexShader: a.vertexShader,
            uniforms: b,
            morphTargets: !0
        });
        Y._shadowPass = !0;
        va._shadowPass = !0
    })();
    this.context = j;
    var ta = j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
    this.getContext = function () {
        return j
    };
    this.supportsVertexTextures = function () {
        return ta
    };
    this.setSize = function (a, b) {
        W.width = a;
        W.height = b;
        this.setViewport(0, 0, W.width, W.height)
    };
    this.setViewport = function (a, b, c, d) {
        ra = a;
        sa = b;
        xa = c;
        R = d;
        j.viewport(ra, sa, xa, R)
    };
    this.setScissor = function (a, b, c, d) {
        j.scissor(a, b, c, d)
    };
    this.enableScissorTest = function (a) {
        a ? j.enable(j.SCISSOR_TEST) : j.disable(j.SCISSOR_TEST)
    };
    this.setClearColorHex = function (a, b) {
        x.setHex(a);
        I = b;
        j.clearColor(x.r, x.g, x.b, I)
    };
    this.setClearColor = function (a, b) {
        x.copy(a);
        I = b;
        j.clearColor(x.r, x.g, x.b, I)
    };
    this.getClearColor = function () {
        return x
    };
    this.getClearAlpha = function () {
        return I
    };
    this.clear = function (a, b, c) {
        var d = 0;
        if (a === void 0 || a) d |= j.COLOR_BUFFER_BIT;
        if (b === void 0 || b) d |= j.DEPTH_BUFFER_BIT;
        if (c === void 0 || c) d |= j.STENCIL_BUFFER_BIT;
        j.clear(d)
    };
    this.clearTarget = function (a, b, c, d) {
        B(a);
        this.clear(b, c, d)
    };
    this.deallocateObject = function (a) {
        if (a.__webglInit)
            if (a.__webglInit = !1, delete a._modelViewMatrix, delete a._normalMatrixArray, delete a._modelViewMatrixArray, delete a._objectMatrixArray, a instanceof THREE.Mesh)
                for (var b in a.geometry.geometryGroups) {
                    var c = a.geometry.geometryGroups[b];
                    j.deleteBuffer(c.__webglVertexBuffer);
                    j.deleteBuffer(c.__webglNormalBuffer);
                    j.deleteBuffer(c.__webglTangentBuffer);
                    j.deleteBuffer(c.__webglColorBuffer);
                    j.deleteBuffer(c.__webglUVBuffer);
                    j.deleteBuffer(c.__webglUV2Buffer);
                    j.deleteBuffer(c.__webglSkinVertexABuffer);
                    j.deleteBuffer(c.__webglSkinVertexBBuffer);
                    j.deleteBuffer(c.__webglSkinIndicesBuffer);
                    j.deleteBuffer(c.__webglSkinWeightsBuffer);
                    j.deleteBuffer(c.__webglFaceBuffer);
                    j.deleteBuffer(c.__webglLineBuffer);
                    if (c.numMorphTargets)
                        for (var d = 0, e = c.numMorphTargets; d < e; d++) j.deleteBuffer(c.__webglMorphTargetsBuffers[d]);
                    if (c.__webglCustomAttributesList)
                        for (d in d = void 0, c.__webglCustomAttributesList) j.deleteBuffer(c.__webglCustomAttributesList[d].buffer);
                    M.info.memory.geometries--
                } else if (a instanceof THREE.Ribbon) a = a.geometry, j.deleteBuffer(a.__webglVertexBuffer),
        j.deleteBuffer(a.__webglColorBuffer), M.info.memory.geometries--;
        else if (a instanceof THREE.Line) a = a.geometry, j.deleteBuffer(a.__webglVertexBuffer), j.deleteBuffer(a.__webglColorBuffer), M.info.memory.geometries--;
        else if (a instanceof THREE.ParticleSystem) a = a.geometry, j.deleteBuffer(a.__webglVertexBuffer), j.deleteBuffer(a.__webglColorBuffer), M.info.memory.geometries--
    };
    this.deallocateTexture = function (a) {
        if (a.__webglInit) a.__webglInit = !1, j.deleteTexture(a.__webglTexture), M.info.memory.textures--
    };
    this.updateShadowMap =
        function (a, b) {
            l(a, b)
    };
    this.render = function (a, b, c, d) {
        var e, g, m, n, q = a.lights,
            t = a.fog;
        Q = -1;
        this.autoUpdateObjects && this.initWebGLObjects(a);
        this.shadowMapEnabled && this.shadowMapAutoUpdate && l(a, b);
        M.info.render.calls = 0;
        M.info.render.vertices = 0;
        M.info.render.faces = 0;
        b.parent === void 0 && (console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."), a.add(b));
        this.autoUpdateScene && a.updateMatrixWorld();
        b.matrixWorldInverse.getInverse(b.matrixWorld);
        b.matrixWorldInverse.flattenToArray($);
        b.projectionMatrix.flattenToArray(H);
        Z.multiply(b.projectionMatrix, b.matrixWorldInverse);
        f(Z);
        B(c);
        (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
        n = a.__webglObjects;
        d = 0;
        for (e = n.length; d < e; d++)
            if (g = n[d], m = g.object, g.render = !1, m.visible && (!(m instanceof THREE.Mesh) || !m.frustumCulled || h(m))) {
                m.matrixWorld.flattenToArray(m._objectMatrixArray);
                s(m, b, !0);
                var o = g,
                    A = o.object,
                    u = o.buffer,
                    F = void 0,
                    F = F = void 0,
                    F = A.material;
                if (F instanceof THREE.MeshFaceMaterial) {
                    if (F = u.materialIndex, F >= 0) F = A.geometry.materials[F],
                    F.transparent ? (o.transparent = F, o.opaque = null) : (o.opaque = F, o.transparent = null)
                } else if (F) F.transparent ? (o.transparent = F, o.opaque = null) : (o.opaque = F, o.transparent = null);
                g.render = !0;
                if (this.sortObjects) m.renderDepth ? g.z = m.renderDepth : (ca.copy(m.position), Z.multiplyVector3(ca), g.z = ca.z)
            }
        this.sortObjects && n.sort(i);
        n = a.__webglObjectsImmediate;
        d = 0;
        for (e = n.length; d < e; d++)
            if (g = n[d], m = g.object, m.visible) m.matrixAutoUpdate && m.matrixWorld.flattenToArray(m._objectMatrixArray), s(m, b, !0), m = g.object.material, m.transparent ?
                (g.transparent = m, g.opaque = null) : (g.opaque = m, g.transparent = null);
        a.overrideMaterial ? (G(a.overrideMaterial.blending), r(a.overrideMaterial.depthTest), z(a.overrideMaterial.depthWrite), E(a.overrideMaterial.polygonOffset, a.overrideMaterial.polygonOffsetFactor, a.overrideMaterial.polygonOffsetUnits), k(a.__webglObjects, !1, "", b, q, t, !0, a.overrideMaterial), p(a.__webglObjectsImmediate, "", b, q, t, !1, a.overrideMaterial)) : (G(THREE.NormalBlending), k(a.__webglObjects, !0, "opaque", b, q, t, !1), p(a.__webglObjectsImmediate,
            "opaque", b, q, t, !1), k(a.__webglObjects, !1, "transparent", b, q, t, !0), p(a.__webglObjectsImmediate, "transparent", b, q, t, !0));
        if (a.__webglSprites.length) {
            m = N.attributes;
            q = N.uniforms;
            t = R / xa;
            d = [];
            e = xa * 0.5;
            n = R * 0.5;
            g = !0;
            j.useProgram(N.program);
            ha = N.program;
            K = na = pa = -1;
            ua || (j.enableVertexAttribArray(N.attributes.position), j.enableVertexAttribArray(N.attributes.uv), ua = !0);
            j.disable(j.CULL_FACE);
            j.enable(j.BLEND);
            j.depthMask(!0);
            j.bindBuffer(j.ARRAY_BUFFER, N.vertexBuffer);
            j.vertexAttribPointer(m.position, 2, j.FLOAT, !1, 16, 0);
            j.vertexAttribPointer(m.uv, 2, j.FLOAT, !1, 16, 8);
            j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, N.elementBuffer);
            j.uniformMatrix4fv(q.projectionMatrix, !1, H);
            j.activeTexture(j.TEXTURE0);
            j.uniform1i(q.map, 0);
            m = 0;
            for (o = a.__webglSprites.length; m < o; m++)
                if (A = a.__webglSprites[m], A.visible && A.opacity !== 0) A.useScreenCoordinates ? A.z = -A.position.z : (A._modelViewMatrix.multiplyToArray(b.matrixWorldInverse, A.matrixWorld, A._modelViewMatrixArray), A.z = -A._modelViewMatrix.n34);
            a.__webglSprites.sort(i);
            m = 0;
            for (o = a.__webglSprites.length; m <
                o; m++) A = a.__webglSprites[m], A.visible && A.opacity !== 0 && A.map && A.map.image && A.map.image.width && (A.useScreenCoordinates ? (j.uniform1i(q.useScreenCoordinates, 1), j.uniform3f(q.screenPosition, (A.position.x - e) / e, (n - A.position.y) / n, Math.max(0, Math.min(1, A.position.z)))) : (j.uniform1i(q.useScreenCoordinates, 0), j.uniform1i(q.affectedByDistance, A.affectedByDistance ? 1 : 0), j.uniformMatrix4fv(q.modelViewMatrix, !1, A._modelViewMatrixArray)), b = A.map.image.width / (A.scaleByViewport ? R : 1), d[0] = b * t * A.scale.x, d[1] = b * A.scale.y,
                j.uniform2f(q.uvScale, A.uvScale.x, A.uvScale.y), j.uniform2f(q.uvOffset, A.uvOffset.x, A.uvOffset.y), j.uniform2f(q.alignment, A.alignment.x, A.alignment.y), j.uniform1f(q.opacity, A.opacity), j.uniform3f(q.color, A.color.r, A.color.g, A.color.b), j.uniform1f(q.rotation, A.rotation), j.uniform2fv(q.scale, d), A.mergeWith3D && !g ? (j.enable(j.DEPTH_TEST), g = !0) : !A.mergeWith3D && g && (j.disable(j.DEPTH_TEST), g = !1), G(A.blending), C(A.map, 0), j.drawElements(j.TRIANGLES, 6, j.UNSIGNED_SHORT, 0));
            j.enable(j.CULL_FACE);
            j.enable(j.DEPTH_TEST);
            j.depthMask(ka)
        }
        c && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && (c instanceof THREE.WebGLRenderTargetCube ? (j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture), j.generateMipmap(j.TEXTURE_CUBE_MAP), j.bindTexture(j.TEXTURE_CUBE_MAP, null)) : (j.bindTexture(j.TEXTURE_2D, c.__webglTexture), j.generateMipmap(j.TEXTURE_2D), j.bindTexture(j.TEXTURE_2D, null)))
    };
    this.initWebGLObjects = function (a) {
        if (!a.__webglObjects) a.__webglObjects = [], a.__webglObjectsImmediate = [], a.__webglSprites = [];
        for (; a.__objectsAdded.length;) {
            var e =
                a.__objectsAdded[0],
                g = a,
                f = void 0,
                h = void 0,
                i = void 0;
            if (!e.__webglInit)
                if (e.__webglInit = !0, e._modelViewMatrix = new THREE.Matrix4, e._normalMatrixArray = new Float32Array(9), e._modelViewMatrixArray = new Float32Array(16), e._objectMatrixArray = new Float32Array(16), e.matrixWorld.flattenToArray(e._objectMatrixArray), e instanceof THREE.Mesh) {
                    h = e.geometry;
                    if (h.geometryGroups === void 0) {
                        var i = h,
                            k = void 0,
                            l = void 0,
                            p = void 0,
                            R = void 0,
                            o = void 0,
                            A = void 0,
                            Z = void 0,
                            s = {}, u = i.morphTargets.length;
                        i.geometryGroups = {};
                        k = 0;
                        for (l =
                            i.faces.length; k < l; k++) p = i.faces[k], R = p.materialIndex, A = R !== void 0 ? R : -1, s[A] === void 0 && (s[A] = {
                            hash: A,
                            counter: 0
                        }), Z = s[A].hash + "_" + s[A].counter, i.geometryGroups[Z] === void 0 && (i.geometryGroups[Z] = {
                            faces3: [],
                            faces4: [],
                            materialIndex: R,
                            vertices: 0,
                            numMorphTargets: u
                        }), o = p instanceof THREE.Face3 ? 3 : 4, i.geometryGroups[Z].vertices + o > 65535 && (s[A].counter += 1, Z = s[A].hash + "_" + s[A].counter, i.geometryGroups[Z] === void 0 && (i.geometryGroups[Z] = {
                            faces3: [],
                            faces4: [],
                            materialIndex: R,
                            vertices: 0,
                            numMorphTargets: u
                        })), p instanceof
                        THREE.Face3 ? i.geometryGroups[Z].faces3.push(k) : i.geometryGroups[Z].faces4.push(k), i.geometryGroups[Z].vertices += o;
                        i.geometryGroupsList = [];
                        k = void 0;
                        for (k in i.geometryGroups) i.geometryGroups[k].id = fa++, i.geometryGroupsList.push(i.geometryGroups[k])
                    }
                    for (f in h.geometryGroups)
                        if (i = h.geometryGroups[f], !i.__webglVertexBuffer) {
                            k = i;
                            k.__webglVertexBuffer = j.createBuffer();
                            k.__webglNormalBuffer = j.createBuffer();
                            k.__webglTangentBuffer = j.createBuffer();
                            k.__webglColorBuffer = j.createBuffer();
                            k.__webglUVBuffer =
                                j.createBuffer();
                            k.__webglUV2Buffer = j.createBuffer();
                            k.__webglSkinVertexABuffer = j.createBuffer();
                            k.__webglSkinVertexBBuffer = j.createBuffer();
                            k.__webglSkinIndicesBuffer = j.createBuffer();
                            k.__webglSkinWeightsBuffer = j.createBuffer();
                            k.__webglFaceBuffer = j.createBuffer();
                            k.__webglLineBuffer = j.createBuffer();
                            if (k.numMorphTargets) {
                                p = l = void 0;
                                k.__webglMorphTargetsBuffers = [];
                                l = 0;
                                for (p = k.numMorphTargets; l < p; l++) k.__webglMorphTargetsBuffers.push(j.createBuffer())
                            }
                            M.info.memory.geometries++;
                            R = e;
                            o = R.geometry;
                            l =
                                i.faces3;
                            A = i.faces4;
                            k = l.length * 3 + A.length * 4;
                            p = l.length * 1 + A.length * 2;
                            A = l.length * 3 + A.length * 4;
                            l = b(R, i);
                            Z = l.map || l.lightMap || l instanceof THREE.ShaderMaterial ? !0 : !1;
                            s = l instanceof THREE.MeshBasicMaterial && !l.envMap || l instanceof THREE.MeshDepthMaterial ? !1 : l && l.shading !== void 0 && l.shading === THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
                            u = l.vertexColors ? l.vertexColors : !1;
                            i.__vertexArray = new Float32Array(k * 3);
                            if (s) i.__normalArray = new Float32Array(k * 3);
                            if (o.hasTangents) i.__tangentArray = new Float32Array(k *
                                4);
                            if (u) i.__colorArray = new Float32Array(k * 3);
                            if (Z) {
                                if (o.faceUvs.length > 0 || o.faceVertexUvs.length > 0) i.__uvArray = new Float32Array(k * 2);
                                if (o.faceUvs.length > 1 || o.faceVertexUvs.length > 1) i.__uv2Array = new Float32Array(k * 2)
                            }
                            if (R.geometry.skinWeights.length && R.geometry.skinIndices.length) i.__skinVertexAArray = new Float32Array(k * 4), i.__skinVertexBArray = new Float32Array(k * 4), i.__skinIndexArray = new Float32Array(k * 4), i.__skinWeightArray = new Float32Array(k * 4);
                            i.__faceArray = new Uint16Array(p * 3);
                            i.__lineArray = new Uint16Array(A *
                                2);
                            if (i.numMorphTargets) {
                                i.__morphTargetsArrays = [];
                                R = 0;
                                for (o = i.numMorphTargets; R < o; R++) i.__morphTargetsArrays.push(new Float32Array(k * 3))
                            }
                            i.__needsSmoothNormals = s === THREE.SmoothShading;
                            i.__uvType = Z;
                            i.__vertexColorType = u;
                            i.__normalType = s;
                            i.__webglFaceCount = p * 3;
                            i.__webglLineCount = A * 2;
                            if (l.attributes) {
                                if (i.__webglCustomAttributesList === void 0) i.__webglCustomAttributesList = [];
                                p = void 0;
                                for (p in l.attributes) {
                                    var R = l.attributes[p],
                                        o = {}, B;
                                    for (B in R) o[B] = R[B];
                                    if (!o.__webglInitialized || o.createUniqueBuffers) o.__webglInitialized = !0, A = 1, o.type === "v2" ? A = 2 : o.type === "v3" ? A = 3 : o.type === "v4" ? A = 4 : o.type === "c" && (A = 3), o.size = A, o.array = new Float32Array(k * A), o.buffer = j.createBuffer(), o.buffer.belongsToAttribute = p, R.needsUpdate = !0, o.__original = R;
                                    i.__webglCustomAttributesList.push(o)
                                }
                            }
                            i.__inittedArrays = !0;
                            h.__dirtyVertices = !0;
                            h.__dirtyMorphTargets = !0;
                            h.__dirtyElements = !0;
                            h.__dirtyUvs = !0;
                            h.__dirtyNormals = !0;
                            h.__dirtyTangents = !0;
                            h.__dirtyColors = !0
                        }
                } else if (e instanceof THREE.Ribbon) {
                if (h = e.geometry, !h.__webglVertexBuffer) i = h, i.__webglVertexBuffer =
                    j.createBuffer(), i.__webglColorBuffer = j.createBuffer(), M.info.memory.geometries++, i = h, k = i.vertices.length, i.__vertexArray = new Float32Array(k * 3), i.__colorArray = new Float32Array(k * 3), i.__webglVertexCount = k, h.__dirtyVertices = !0, h.__dirtyColors = !0
            } else if (e instanceof THREE.Line) {
                if (h = e.geometry, !h.__webglVertexBuffer) i = h, i.__webglVertexBuffer = j.createBuffer(), i.__webglColorBuffer = j.createBuffer(), M.info.memory.geometries++, i = h, k = e, l = i.vertices.length, i.__vertexArray = new Float32Array(l * 3), i.__colorArray =
                    new Float32Array(l * 3), i.__webglLineCount = l, c(i, k), h.__dirtyVertices = !0, h.__dirtyColors = !0
            } else if (e instanceof THREE.ParticleSystem && (h = e.geometry, !h.__webglVertexBuffer)) i = h, i.__webglVertexBuffer = j.createBuffer(), i.__webglColorBuffer = j.createBuffer(), M.info.geometries++, i = h, k = e, l = i.vertices.length, i.__vertexArray = new Float32Array(l * 3), i.__colorArray = new Float32Array(l * 3), i.__sortArray = [], i.__webglParticleCount = l, c(i, k), h.__dirtyVertices = !0, h.__dirtyColors = !0;
            if (!e.__webglActive) {
                if (e instanceof THREE.Mesh)
                    for (f in h =
                        e.geometry, h.geometryGroups) i = h.geometryGroups[f], q(g.__webglObjects, i, e);
                else e instanceof THREE.Ribbon || e instanceof THREE.Line || e instanceof THREE.ParticleSystem ? (h = e.geometry, q(g.__webglObjects, h, e)) : THREE.MarchingCubes !== void 0 && e instanceof THREE.MarchingCubes || e.immediateRenderCallback ? g.__webglObjectsImmediate.push({
                    object: e,
                    opaque: null,
                    transparent: null
                }) : e instanceof THREE.Sprite && g.__webglSprites.push(e);
                e.__webglActive = !0
            }
            a.__objectsAdded.splice(0, 1)
        }
        for (; a.__objectsRemoved.length;) {
            e =
                a.__objectsRemoved[0];
            g = a;
            if (e instanceof THREE.Mesh || e instanceof THREE.ParticleSystem || e instanceof THREE.Ribbon || e instanceof THREE.Line) n(g.__webglObjects, e);
            else if (e instanceof THREE.Sprite) {
                g = g.__webglSprites;
                f = e;
                for (h = g.length - 1; h >= 0; h--) g[h] === f && g.splice(h, 1)
            } else(e instanceof THREE.MarchingCubes || e.immediateRenderCallback) && n(g.__webglObjectsImmediate, e);
            e.__webglActive = !1;
            a.__objectsRemoved.splice(0, 1)
        }
        e = 0;
        for (g = a.__webglObjects.length; e < g; e++)
            if (B = a.__webglObjects[e].object, f = B.geometry,
                h = p = l = void 0, B instanceof THREE.Mesh) {
                i = 0;
                for (k = f.geometryGroupsList.length; i < k; i++)
                    if (l = f.geometryGroupsList[i], h = b(B, l), p = h.attributes && m(h), f.__dirtyVertices || f.__dirtyMorphTargets || f.__dirtyElements || f.__dirtyUvs || f.__dirtyNormals || f.__dirtyColors || f.__dirtyTangents || p)
                        if (p = j.DYNAMIC_DRAW, R = !f.dynamic, l.__inittedArrays) {
                            var F = A = o = void 0,
                                r = void 0,
                                L = void 0,
                                z = void 0,
                                H = void 0,
                                J = void 0,
                                I = void 0,
                                O = void 0,
                                G = void 0,
                                C = F = z = void 0,
                                x = void 0,
                                w = void 0,
                                v = void 0,
                                E = r = void 0,
                                $ = void 0,
                                ca = r = I = G = void 0,
                                N = void 0,
                                T =
                                    v = w = x = H = void 0,
                                S = r = v = w = x = T = v = w = x = T = v = w = x = void 0,
                                aa = void 0,
                                W = z = void 0,
                                X = void 0,
                                Q = void 0,
                                ea = void 0,
                                V = void 0,
                                K = C = Q = aa = 0,
                                ba = 0,
                                U = S = F = 0,
                                P = H = E = 0,
                                D = 0,
                                ga = void 0,
                                P = l.__vertexArray,
                                X = l.__uvArray,
                                D = l.__uv2Array,
                                W = l.__normalArray,
                                L = l.__tangentArray,
                                $ = l.__colorArray,
                                ca = l.__skinVertexAArray,
                                N = l.__skinVertexBArray,
                                J = l.__skinIndexArray,
                                Y = l.__skinWeightArray,
                                T = l.__morphTargetsArrays,
                                Z = l.__webglCustomAttributesList,
                                y = void 0,
                                y = l.__faceArray,
                                ga = l.__lineArray,
                                ha = l.__needsSmoothNormals,
                                G = l.__vertexColorType,
                                O = l.__uvType,
                                z = l.__normalType,
                                I = B.geometry,
                                ia = I.__dirtyElements,
                                va = I.__dirtyUvs,
                                pa = I.__dirtyNormals,
                                ta = I.__dirtyTangents,
                                na = I.__dirtyColors,
                                ea = I.__dirtyMorphTargets,
                                V = I.vertices,
                                s = l.faces3,
                                u = l.faces4,
                                ja = I.faces,
                                ka = I.faceVertexUvs[0],
                                ma = I.faceVertexUvs[1],
                                la = I.skinVerticesA,
                                oa = I.skinVerticesB,
                                ua = I.skinIndices,
                                ra = I.skinWeights,
                                sa = I.morphTargets;
                            if (I.__dirtyVertices) {
                                o = 0;
                                for (A = s.length; o < A; o++) r = ja[s[o]], x = V[r.a].position, w = V[r.b].position, v = V[r.c].position, P[Q] = x.x, P[Q + 1] = x.y, P[Q + 2] = x.z, P[Q + 3] = w.x, P[Q + 4] = w.y, P[Q +
                                    5] = w.z, P[Q + 6] = v.x, P[Q + 7] = v.y, P[Q + 8] = v.z, Q += 9;
                                o = 0;
                                for (A = u.length; o < A; o++) r = ja[u[o]], x = V[r.a].position, w = V[r.b].position, v = V[r.c].position, r = V[r.d].position, P[Q] = x.x, P[Q + 1] = x.y, P[Q + 2] = x.z, P[Q + 3] = w.x, P[Q + 4] = w.y, P[Q + 5] = w.z, P[Q + 6] = v.x, P[Q + 7] = v.y, P[Q + 8] = v.z, P[Q + 9] = r.x, P[Q + 10] = r.y, P[Q + 11] = r.z, Q += 12;
                                j.bindBuffer(j.ARRAY_BUFFER, l.__webglVertexBuffer);
                                j.bufferData(j.ARRAY_BUFFER, P, p)
                            }
                            if (ea) {
                                Q = 0;
                                for (ea = sa.length; Q < ea; Q++) {
                                    o = P = 0;
                                    for (A = s.length; o < A; o++) r = ja[s[o]], x = sa[Q].vertices[r.a].position, w = sa[Q].vertices[r.b].position,
                                    v = sa[Q].vertices[r.c].position, V = T[Q], V[P] = x.x, V[P + 1] = x.y, V[P + 2] = x.z, V[P + 3] = w.x, V[P + 4] = w.y, V[P + 5] = w.z, V[P + 6] = v.x, V[P + 7] = v.y, V[P + 8] = v.z, P += 9;
                                    o = 0;
                                    for (A = u.length; o < A; o++) r = ja[u[o]], x = sa[Q].vertices[r.a].position, w = sa[Q].vertices[r.b].position, v = sa[Q].vertices[r.c].position, r = sa[Q].vertices[r.d].position, V = T[Q], V[P] = x.x, V[P + 1] = x.y, V[P + 2] = x.z, V[P + 3] = w.x, V[P + 4] = w.y, V[P + 5] = w.z, V[P + 6] = v.x, V[P + 7] = v.y, V[P + 8] = v.z, V[P + 9] = r.x, V[P + 10] = r.y, V[P + 11] = r.z, P += 12;
                                    j.bindBuffer(j.ARRAY_BUFFER, l.__webglMorphTargetsBuffers[Q]);
                                    j.bufferData(j.ARRAY_BUFFER, T[Q], p)
                                }
                            }
                            if (ra.length) {
                                o = 0;
                                for (A = s.length; o < A; o++) r = ja[s[o]], x = ra[r.a], w = ra[r.b], v = ra[r.c], Y[H] = x.x, Y[H + 1] = x.y, Y[H + 2] = x.z, Y[H + 3] = x.w, Y[H + 4] = w.x, Y[H + 5] = w.y, Y[H + 6] = w.z, Y[H + 7] = w.w, Y[H + 8] = v.x, Y[H + 9] = v.y, Y[H + 10] = v.z, Y[H + 11] = v.w, x = ua[r.a], w = ua[r.b], v = ua[r.c], J[H] = x.x, J[H + 1] = x.y, J[H + 2] = x.z, J[H + 3] = x.w, J[H + 4] = w.x, J[H + 5] = w.y, J[H + 6] = w.z, J[H + 7] = w.w, J[H + 8] = v.x, J[H + 9] = v.y, J[H + 10] = v.z, J[H + 11] = v.w, x = la[r.a], w = la[r.b], v = la[r.c], ca[H] = x.x, ca[H + 1] = x.y, ca[H + 2] = x.z, ca[H + 3] = 1, ca[H + 4] = w.x, ca[H +
                                    5] = w.y, ca[H + 6] = w.z, ca[H + 7] = 1, ca[H + 8] = v.x, ca[H + 9] = v.y, ca[H + 10] = v.z, ca[H + 11] = 1, x = oa[r.a], w = oa[r.b], v = oa[r.c], N[H] = x.x, N[H + 1] = x.y, N[H + 2] = x.z, N[H + 3] = 1, N[H + 4] = w.x, N[H + 5] = w.y, N[H + 6] = w.z, N[H + 7] = 1, N[H + 8] = v.x, N[H + 9] = v.y, N[H + 10] = v.z, N[H + 11] = 1, H += 12;
                                o = 0;
                                for (A = u.length; o < A; o++) r = ja[u[o]], x = ra[r.a], w = ra[r.b], v = ra[r.c], T = ra[r.d], Y[H] = x.x, Y[H + 1] = x.y, Y[H + 2] = x.z, Y[H + 3] = x.w, Y[H + 4] = w.x, Y[H + 5] = w.y, Y[H + 6] = w.z, Y[H + 7] = w.w, Y[H + 8] = v.x, Y[H + 9] = v.y, Y[H + 10] = v.z, Y[H + 11] = v.w, Y[H + 12] = T.x, Y[H + 13] = T.y, Y[H + 14] = T.z, Y[H + 15] = T.w, x = ua[r.a],
                                w = ua[r.b], v = ua[r.c], T = ua[r.d], J[H] = x.x, J[H + 1] = x.y, J[H + 2] = x.z, J[H + 3] = x.w, J[H + 4] = w.x, J[H + 5] = w.y, J[H + 6] = w.z, J[H + 7] = w.w, J[H + 8] = v.x, J[H + 9] = v.y, J[H + 10] = v.z, J[H + 11] = v.w, J[H + 12] = T.x, J[H + 13] = T.y, J[H + 14] = T.z, J[H + 15] = T.w, x = la[r.a], w = la[r.b], v = la[r.c], T = la[r.d], ca[H] = x.x, ca[H + 1] = x.y, ca[H + 2] = x.z, ca[H + 3] = 1, ca[H + 4] = w.x, ca[H + 5] = w.y, ca[H + 6] = w.z, ca[H + 7] = 1, ca[H + 8] = v.x, ca[H + 9] = v.y, ca[H + 10] = v.z, ca[H + 11] = 1, ca[H + 12] = T.x, ca[H + 13] = T.y, ca[H + 14] = T.z, ca[H + 15] = 1, x = oa[r.a], w = oa[r.b], v = oa[r.c], r = oa[r.d], N[H] = x.x, N[H + 1] = x.y, N[H +
                                    2] = x.z, N[H + 3] = 1, N[H + 4] = w.x, N[H + 5] = w.y, N[H + 6] = w.z, N[H + 7] = 1, N[H + 8] = v.x, N[H + 9] = v.y, N[H + 10] = v.z, N[H + 11] = 1, N[H + 12] = r.x, N[H + 13] = r.y, N[H + 14] = r.z, N[H + 15] = 1, H += 16;
                                H > 0 && (j.bindBuffer(j.ARRAY_BUFFER, l.__webglSkinVertexABuffer), j.bufferData(j.ARRAY_BUFFER, ca, p), j.bindBuffer(j.ARRAY_BUFFER, l.__webglSkinVertexBBuffer), j.bufferData(j.ARRAY_BUFFER, N, p), j.bindBuffer(j.ARRAY_BUFFER, l.__webglSkinIndicesBuffer), j.bufferData(j.ARRAY_BUFFER, J, p), j.bindBuffer(j.ARRAY_BUFFER, l.__webglSkinWeightsBuffer), j.bufferData(j.ARRAY_BUFFER,
                                    Y, p))
                            }
                            if (na && G) {
                                o = 0;
                                for (A = s.length; o < A; o++) r = ja[s[o]], H = r.vertexColors, J = r.color, H.length === 3 && G === THREE.VertexColors ? (r = H[0], ca = H[1], N = H[2]) : N = ca = r = J, $[E] = r.r, $[E + 1] = r.g, $[E + 2] = r.b, $[E + 3] = ca.r, $[E + 4] = ca.g, $[E + 5] = ca.b, $[E + 6] = N.r, $[E + 7] = N.g, $[E + 8] = N.b, E += 9;
                                o = 0;
                                for (A = u.length; o < A; o++) r = ja[u[o]], H = r.vertexColors, J = r.color, H.length === 4 && G === THREE.VertexColors ? (r = H[0], ca = H[1], N = H[2], H = H[3]) : H = N = ca = r = J, $[E] = r.r, $[E + 1] = r.g, $[E + 2] = r.b, $[E + 3] = ca.r, $[E + 4] = ca.g, $[E + 5] = ca.b, $[E + 6] = N.r, $[E + 7] = N.g, $[E + 8] = N.b, $[E +
                                    9] = H.r, $[E + 10] = H.g, $[E + 11] = H.b, E += 12;
                                E > 0 && (j.bindBuffer(j.ARRAY_BUFFER, l.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, $, p))
                            }
                            if (ta && I.hasTangents) {
                                o = 0;
                                for (A = s.length; o < A; o++) r = ja[s[o]], I = r.vertexTangents, E = I[0], $ = I[1], G = I[2], L[S] = E.x, L[S + 1] = E.y, L[S + 2] = E.z, L[S + 3] = E.w, L[S + 4] = $.x, L[S + 5] = $.y, L[S + 6] = $.z, L[S + 7] = $.w, L[S + 8] = G.x, L[S + 9] = G.y, L[S + 10] = G.z, L[S + 11] = G.w, S += 12;
                                o = 0;
                                for (A = u.length; o < A; o++) r = ja[u[o]], I = r.vertexTangents, E = I[0], $ = I[1], G = I[2], I = I[3], L[S] = E.x, L[S + 1] = E.y, L[S + 2] = E.z, L[S + 3] = E.w, L[S + 4] = $.x,
                                L[S + 5] = $.y, L[S + 6] = $.z, L[S + 7] = $.w, L[S + 8] = G.x, L[S + 9] = G.y, L[S + 10] = G.z, L[S + 11] = G.w, L[S + 12] = I.x, L[S + 13] = I.y, L[S + 14] = I.z, L[S + 15] = I.w, S += 16;
                                j.bindBuffer(j.ARRAY_BUFFER, l.__webglTangentBuffer);
                                j.bufferData(j.ARRAY_BUFFER, L, p)
                            }
                            if (pa && z) {
                                o = 0;
                                for (A = s.length; o < A; o++)
                                    if (r = ja[s[o]], L = r.vertexNormals, z = r.normal, L.length === 3 && ha)
                                        for (S = 0; S < 3; S++) z = L[S], W[F] = z.x, W[F + 1] = z.y, W[F + 2] = z.z, F += 3;
                                    else
                                        for (S = 0; S < 3; S++) W[F] = z.x, W[F + 1] = z.y, W[F + 2] = z.z, F += 3;
                                o = 0;
                                for (A = u.length; o < A; o++)
                                    if (r = ja[u[o]], L = r.vertexNormals, z = r.normal,
                                        L.length === 4 && ha)
                                        for (S = 0; S < 4; S++) z = L[S], W[F] = z.x, W[F + 1] = z.y, W[F + 2] = z.z, F += 3;
                                    else
                                        for (S = 0; S < 4; S++) W[F] = z.x, W[F + 1] = z.y, W[F + 2] = z.z, F += 3;
                                j.bindBuffer(j.ARRAY_BUFFER, l.__webglNormalBuffer);
                                j.bufferData(j.ARRAY_BUFFER, W, p)
                            }
                            if (va && ka && O) {
                                o = 0;
                                for (A = s.length; o < A; o++)
                                    if (F = s[o], F = ka[F], F !== void 0)
                                        for (S = 0; S < 3; S++) W = F[S], X[C] = W.u, X[C + 1] = W.v, C += 2;
                                o = 0;
                                for (A = u.length; o < A; o++)
                                    if (F = u[o], F = ka[F], F !== void 0)
                                        for (S = 0; S < 4; S++) W = F[S], X[C] = W.u, X[C + 1] = W.v, C += 2;
                                C > 0 && (j.bindBuffer(j.ARRAY_BUFFER, l.__webglUVBuffer), j.bufferData(j.ARRAY_BUFFER,
                                    X, p))
                            }
                            if (va && ma && O) {
                                o = 0;
                                for (A = s.length; o < A; o++)
                                    if (F = s[o], C = ma[F], C !== void 0)
                                        for (S = 0; S < 3; S++) X = C[S], D[K] = X.u, D[K + 1] = X.v, K += 2;
                                o = 0;
                                for (A = u.length; o < A; o++)
                                    if (F = u[o], C = ma[F], C !== void 0)
                                        for (S = 0; S < 4; S++) X = C[S], D[K] = X.u, D[K + 1] = X.v, K += 2;
                                K > 0 && (j.bindBuffer(j.ARRAY_BUFFER, l.__webglUV2Buffer), j.bufferData(j.ARRAY_BUFFER, D, p))
                            }
                            if (ia) {
                                o = 0;
                                for (A = s.length; o < A; o++) y[ba] = aa, y[ba + 1] = aa + 1, y[ba + 2] = aa + 2, ba += 3, ga[U] = aa, ga[U + 1] = aa + 1, ga[U + 2] = aa, ga[U + 3] = aa + 2, ga[U + 4] = aa + 1, ga[U + 5] = aa + 2, U += 6, aa += 3;
                                o = 0;
                                for (A = u.length; o < A; o++) y[ba] =
                                    aa, y[ba + 1] = aa + 1, y[ba + 2] = aa + 3, y[ba + 3] = aa + 1, y[ba + 4] = aa + 2, y[ba + 5] = aa + 3, ba += 6, ga[U] = aa, ga[U + 1] = aa + 1, ga[U + 2] = aa, ga[U + 3] = aa + 3, ga[U + 4] = aa + 1, ga[U + 5] = aa + 2, ga[U + 6] = aa + 2, ga[U + 7] = aa + 3, U += 8, aa += 4;
                                j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, l.__webglFaceBuffer);
                                j.bufferData(j.ELEMENT_ARRAY_BUFFER, y, p);
                                j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, l.__webglLineBuffer);
                                j.bufferData(j.ELEMENT_ARRAY_BUFFER, ga, p)
                            }
                            if (Z) {
                                S = 0;
                                for (aa = Z.length; S < aa; S++)
                                    if (y = Z[S], y.__original.needsUpdate) {
                                        D = 0;
                                        if (y.size === 1)
                                            if (y.boundTo === void 0 || y.boundTo ===
                                                "vertices") {
                                                o = 0;
                                                for (A = s.length; o < A; o++) r = ja[s[o]], y.array[D] = y.value[r.a], y.array[D + 1] = y.value[r.b], y.array[D + 2] = y.value[r.c], D += 3;
                                                o = 0;
                                                for (A = u.length; o < A; o++) r = ja[u[o]], y.array[D] = y.value[r.a], y.array[D + 1] = y.value[r.b], y.array[D + 2] = y.value[r.c], y.array[D + 3] = y.value[r.d], D += 4
                                            } else {
                                                if (y.boundTo === "faces") {
                                                    o = 0;
                                                    for (A = s.length; o < A; o++) ga = y.value[s[o]], y.array[D] = ga, y.array[D + 1] = ga, y.array[D + 2] = ga, D += 3;
                                                    o = 0;
                                                    for (A = u.length; o < A; o++) ga = y.value[u[o]], y.array[D] = ga, y.array[D + 1] = ga, y.array[D + 2] = ga, y.array[D + 3] =
                                                        ga, D += 4
                                                }
                                            } else if (y.size === 2)
                                            if (y.boundTo === void 0 || y.boundTo === "vertices") {
                                                o = 0;
                                                for (A = s.length; o < A; o++) r = ja[s[o]], x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = w.x, y.array[D + 3] = w.y, y.array[D + 4] = v.x, y.array[D + 5] = v.y, D += 6;
                                                o = 0;
                                                for (A = u.length; o < A; o++) r = ja[u[o]], x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], r = y.value[r.d], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = w.x, y.array[D + 3] = w.y, y.array[D + 4] = v.x, y.array[D + 5] = v.y, y.array[D + 6] = r.x, y.array[D + 7] = r.y, D += 8
                                            } else {
                                                if (y.boundTo ===
                                                    "faces") {
                                                    o = 0;
                                                    for (A = s.length; o < A; o++) v = w = x = ga = y.value[s[o]], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = w.x, y.array[D + 3] = w.y, y.array[D + 4] = v.x, y.array[D + 5] = v.y, D += 6;
                                                    o = 0;
                                                    for (A = u.length; o < A; o++) r = v = w = x = ga = y.value[u[o]], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = w.x, y.array[D + 3] = w.y, y.array[D + 4] = v.x, y.array[D + 5] = v.y, y.array[D + 6] = r.x, y.array[D + 7] = r.y, D += 8
                                                }
                                            } else if (y.size === 3)
                                            if (K = y.type === "c" ? ["r", "g", "b"] : ["x", "y", "z"], y.boundTo === void 0 || y.boundTo === "vertices") {
                                                o = 0;
                                                for (A = s.length; o < A; o++) r = ja[s[o]],
                                                x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], y.array[D] = x[K[0]], y.array[D + 1] = x[K[1]], y.array[D + 2] = x[K[2]], y.array[D + 3] = w[K[0]], y.array[D + 4] = w[K[1]], y.array[D + 5] = w[K[2]], y.array[D + 6] = v[K[0]], y.array[D + 7] = v[K[1]], y.array[D + 8] = v[K[2]], D += 9;
                                                o = 0;
                                                for (A = u.length; o < A; o++) r = ja[u[o]], x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], r = y.value[r.d], y.array[D] = x[K[0]], y.array[D + 1] = x[K[1]], y.array[D + 2] = x[K[2]], y.array[D + 3] = w[K[0]], y.array[D + 4] = w[K[1]], y.array[D + 5] = w[K[2]], y.array[D + 6] = v[K[0]], y.array[D + 7] = v[K[1]],
                                                y.array[D + 8] = v[K[2]], y.array[D + 9] = r[K[0]], y.array[D + 10] = r[K[1]], y.array[D + 11] = r[K[2]], D += 12
                                            } else {
                                                if (y.boundTo === "faces") {
                                                    o = 0;
                                                    for (A = s.length; o < A; o++) v = w = x = ga = y.value[s[o]], y.array[D] = x[K[0]], y.array[D + 1] = x[K[1]], y.array[D + 2] = x[K[2]], y.array[D + 3] = w[K[0]], y.array[D + 4] = w[K[1]], y.array[D + 5] = w[K[2]], y.array[D + 6] = v[K[0]], y.array[D + 7] = v[K[1]], y.array[D + 8] = v[K[2]], D += 9;
                                                    o = 0;
                                                    for (A = u.length; o < A; o++) r = v = w = x = ga = y.value[u[o]], y.array[D] = x[K[0]], y.array[D + 1] = x[K[1]], y.array[D + 2] = x[K[2]], y.array[D + 3] = w[K[0]], y.array[D +
                                                        4] = w[K[1]], y.array[D + 5] = w[K[2]], y.array[D + 6] = v[K[0]], y.array[D + 7] = v[K[1]], y.array[D + 8] = v[K[2]], y.array[D + 9] = r[K[0]], y.array[D + 10] = r[K[1]], y.array[D + 11] = r[K[2]], D += 12
                                                }
                                            } else if (y.size === 4)
                                            if (y.boundTo === void 0 || y.boundTo === "vertices") {
                                                o = 0;
                                                for (A = s.length; o < A; o++) r = ja[s[o]], x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = x.z, y.array[D + 3] = x.w, y.array[D + 4] = w.x, y.array[D + 5] = w.y, y.array[D + 6] = w.z, y.array[D + 7] = w.w, y.array[D + 8] = v.x, y.array[D + 9] = v.y, y.array[D + 10] = v.z,
                                                y.array[D + 11] = v.w, D += 12;
                                                o = 0;
                                                for (A = u.length; o < A; o++) r = ja[u[o]], x = y.value[r.a], w = y.value[r.b], v = y.value[r.c], r = y.value[r.d], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = x.z, y.array[D + 3] = x.w, y.array[D + 4] = w.x, y.array[D + 5] = w.y, y.array[D + 6] = w.z, y.array[D + 7] = w.w, y.array[D + 8] = v.x, y.array[D + 9] = v.y, y.array[D + 10] = v.z, y.array[D + 11] = v.w, y.array[D + 12] = r.x, y.array[D + 13] = r.y, y.array[D + 14] = r.z, y.array[D + 15] = r.w, D += 16
                                            } else if (y.boundTo === "faces") {
                                            o = 0;
                                            for (A = s.length; o < A; o++) v = w = x = ga = y.value[s[o]], y.array[D] = x.x, y.array[D +
                                                1] = x.y, y.array[D + 2] = x.z, y.array[D + 3] = x.w, y.array[D + 4] = w.x, y.array[D + 5] = w.y, y.array[D + 6] = w.z, y.array[D + 7] = w.w, y.array[D + 8] = v.x, y.array[D + 9] = v.y, y.array[D + 10] = v.z, y.array[D + 11] = v.w, D += 12;
                                            o = 0;
                                            for (A = u.length; o < A; o++) r = v = w = x = ga = y.value[u[o]], y.array[D] = x.x, y.array[D + 1] = x.y, y.array[D + 2] = x.z, y.array[D + 3] = x.w, y.array[D + 4] = w.x, y.array[D + 5] = w.y, y.array[D + 6] = w.z, y.array[D + 7] = w.w, y.array[D + 8] = v.x, y.array[D + 9] = v.y, y.array[D + 10] = v.z, y.array[D + 11] = v.w, y.array[D + 12] = r.x, y.array[D + 13] = r.y, y.array[D + 14] = r.z, y.array[D +
                                                15] = r.w, D += 16
                                        }
                                        j.bindBuffer(j.ARRAY_BUFFER, y.buffer);
                                        j.bufferData(j.ARRAY_BUFFER, y.array, p)
                                    }
                            }
                            R && (delete l.__inittedArrays, delete l.__colorArray, delete l.__normalArray, delete l.__tangentArray, delete l.__uvArray, delete l.__uv2Array, delete l.__faceArray, delete l.__vertexArray, delete l.__lineArray, delete l.__skinVertexAArray, delete l.__skinVertexBArray, delete l.__skinIndexArray, delete l.__skinWeightArray)
                        }
                f.__dirtyVertices = !1;
                f.__dirtyMorphTargets = !1;
                f.__dirtyElements = !1;
                f.__dirtyUvs = !1;
                f.__dirtyNormals = !1;
                f.__dirtyColors = !1;
                f.__dirtyTangents = !1;
                h.attributes && t(h)
            } else if (B instanceof THREE.Ribbon) {
            if (f.__dirtyVertices || f.__dirtyColors) {
                h = f;
                B = j.DYNAMIC_DRAW;
                o = i = o = R = R = void 0;
                A = h.vertices;
                k = h.colors;
                Z = A.length;
                l = k.length;
                s = h.__vertexArray;
                p = h.__colorArray;
                u = h.__dirtyColors;
                if (h.__dirtyVertices) {
                    for (R = 0; R < Z; R++) o = A[R].position, i = R * 3, s[i] = o.x, s[i + 1] = o.y, s[i + 2] = o.z;
                    j.bindBuffer(j.ARRAY_BUFFER, h.__webglVertexBuffer);
                    j.bufferData(j.ARRAY_BUFFER, s, B)
                }
                if (u) {
                    for (R = 0; R < l; R++) o = k[R], i = R * 3, p[i] = o.r, p[i + 1] = o.g,
                    p[i + 2] = o.b;
                    j.bindBuffer(j.ARRAY_BUFFER, h.__webglColorBuffer);
                    j.bufferData(j.ARRAY_BUFFER, p, B)
                }
            }
            f.__dirtyVertices = !1;
            f.__dirtyColors = !1
        } else if (B instanceof THREE.Line) {
            h = b(B, l);
            p = h.attributes && m(h);
            if (f.__dirtyVertices || f.__dirtyColors || p) {
                B = f;
                i = j.DYNAMIC_DRAW;
                Z = k = aa = A = ja = void 0;
                A = B.vertices;
                l = B.colors;
                Z = A.length;
                p = l.length;
                s = B.__vertexArray;
                R = B.__colorArray;
                u = B.__dirtyColors;
                o = B.__webglCustomAttributesList;
                C = U = ba = K = aa = ja = void 0;
                if (B.__dirtyVertices) {
                    for (ja = 0; ja < Z; ja++) aa = A[ja].position, k = ja * 3, s[k] =
                        aa.x, s[k + 1] = aa.y, s[k + 2] = aa.z;
                    j.bindBuffer(j.ARRAY_BUFFER, B.__webglVertexBuffer);
                    j.bufferData(j.ARRAY_BUFFER, s, i)
                }
                if (u) {
                    for (A = 0; A < p; A++) Z = l[A], k = A * 3, R[k] = Z.r, R[k + 1] = Z.g, R[k + 2] = Z.b;
                    j.bindBuffer(j.ARRAY_BUFFER, B.__webglColorBuffer);
                    j.bufferData(j.ARRAY_BUFFER, R, i)
                }
                if (o) {
                    ja = 0;
                    for (aa = o.length; ja < aa; ja++)
                        if (C = o[ja], C.needsUpdate && (C.boundTo === void 0 || C.boundTo === "vertices")) {
                            k = 0;
                            ba = C.value.length;
                            if (C.size === 1)
                                for (K = 0; K < ba; K++) C.array[K] = C.value[K];
                            else if (C.size === 2)
                                for (K = 0; K < ba; K++) U = C.value[K], C.array[k] =
                                    U.x, C.array[k + 1] = U.y, k += 2;
                            else if (C.size === 3)
                                if (C.type === "c")
                                    for (K = 0; K < ba; K++) U = C.value[K], C.array[k] = U.r, C.array[k + 1] = U.g, C.array[k + 2] = U.b, k += 3;
                                else
                                    for (K = 0; K < ba; K++) U = C.value[K], C.array[k] = U.x, C.array[k + 1] = U.y, C.array[k + 2] = U.z, k += 3;
                                else if (C.size === 4)
                                for (K = 0; K < ba; K++) U = C.value[K], C.array[k] = U.x, C.array[k + 1] = U.y, C.array[k + 2] = U.z, C.array[k + 3] = U.w, k += 4;
                            j.bindBuffer(j.ARRAY_BUFFER, C.buffer);
                            j.bufferData(j.ARRAY_BUFFER, C.array, i)
                        }
                }
            }
            f.__dirtyVertices = !1;
            f.__dirtyColors = !1;
            h.attributes && t(h)
        } else if (B instanceof THREE.ParticleSystem) h = b(B, l), p = h.attributes && m(h), (f.__dirtyVertices || f.__dirtyColors || B.sortParticles || p) && d(f, j.DYNAMIC_DRAW, B), f.__dirtyVertices = !1, f.__dirtyColors = !1, h.attributes && t(h)
    };
    this.initMaterial = function (a, b, c, d) {
        var e, g, f, h;
        a instanceof THREE.MeshDepthMaterial ? h = "depth" : a instanceof THREE.MeshNormalMaterial ? h = "normal" : a instanceof THREE.MeshBasicMaterial ? h = "basic" : a instanceof THREE.MeshLambertMaterial ? h = "lambert" : a instanceof THREE.MeshPhongMaterial ? h = "phong" : a instanceof THREE.LineBasicMaterial ?
            h = "basic" : a instanceof THREE.ParticleBasicMaterial && (h = "particle_basic");
        if (h) {
            var i = THREE.ShaderLib[h];
            a.uniforms = THREE.UniformsUtils.clone(i.uniforms);
            a.vertexShader = i.vertexShader;
            a.fragmentShader = i.fragmentShader
        }
        var k, l, m;
        k = m = i = 0;
        for (l = b.length; k < l; k++) f = b[k], f instanceof THREE.SpotLight && m++, f instanceof THREE.DirectionalLight && m++, f instanceof THREE.PointLight && i++;
        i + m <= O ? k = m : (k = Math.ceil(O * m / (i + m)), i = O - k);
        f = {
            directional: k,
            point: i
        };
        i = m = 0;
        for (k = b.length; i < k; i++) l = b[i], l instanceof THREE.SpotLight &&
            l.castShadow && m++;
        var n = 50;
        if (d !== void 0 && d instanceof THREE.SkinnedMesh) n = d.bones.length;
        var o;
        a: {
            k = a.fragmentShader;
            l = a.vertexShader;
            var i = a.uniforms,
                b = a.attributes,
                c = {
                    map: !! a.map,
                    envMap: !! a.envMap,
                    lightMap: !! a.lightMap,
                    vertexColors: a.vertexColors,
                    fog: c,
                    useFog: a.fog,
                    sizeAttenuation: a.sizeAttenuation,
                    skinning: a.skinning,
                    morphTargets: a.morphTargets,
                    maxMorphTargets: this.maxMorphTargets,
                    maxDirLights: f.directional,
                    maxPointLights: f.point,
                    maxBones: n,
                    shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow,
                    shadowMapSoft: this.shadowMapSoft,
                    shadowMapWidth: this.shadowMapWidth,
                    shadowMapHeight: this.shadowMapHeight,
                    maxShadows: m,
                    alphaTest: a.alphaTest,
                    metal: a.metal,
                    perPixel: a.perPixel
                }, p, d = [];
            h ? d.push(h) : (d.push(k), d.push(l));
            for (p in c) d.push(p), d.push(c[p]);
            h = d.join();
            p = 0;
            for (d = P.length; p < d; p++)
                if (P[p].code === h) {
                    o = P[p].program;
                    break a
                }
            p = j.createProgram();
            d = [ta ? "#define VERTEX_TEXTURES" : "", M.gammaInput ? "#define GAMMA_INPUT" : "", M.gammaOutput ? "#define GAMMA_OUTPUT" : "", M.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" :
                "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" :
                "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"
            ].join("\n");
            f = ["#ifdef GL_ES", "precision " + X + " float;", "#endif", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", M.gammaInput ? "#define GAMMA_INPUT" : "", M.gammaOutput ? "#define GAMMA_OUTPUT" : "", M.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" :
                "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.metal ? "#define METAL" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", c.shadowMapSoft ? "#define SHADOWMAP_WIDTH " + c.shadowMapWidth.toFixed(1) : "", c.shadowMapSoft ? "#define SHADOWMAP_HEIGHT " + c.shadowMapHeight.toFixed(1) : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"
            ].join("\n");
            j.attachShader(p, v("fragment", f + k));
            j.attachShader(p,
                v("vertex", d + l));
            j.linkProgram(p);
            j.getProgramParameter(p, j.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + j.getProgramParameter(p, j.VALIDATE_STATUS) + ", gl error [" + j.getError() + "]");
            p.uniforms = {};
            p.attributes = {};
            var q, d = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
            for (q in i) d.push(q);
            q = d;
            d = 0;
            for (i = q.length; d < i; d++) k = q[d], p.uniforms[k] = j.getUniformLocation(p,
                k);
            d = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
            for (q = 0; q < c.maxMorphTargets; q++) d.push("morphTarget" + q);
            for (o in b) d.push(o);
            o = d;
            q = 0;
            for (b = o.length; q < b; q++) c = o[q], p.attributes[c] = j.getAttribLocation(p, c);
            p.id = P.length;
            P.push({
                program: p,
                code: h
            });
            M.info.memory.programs = P.length;
            o = p
        }
        a.program = o;
        o = a.program.attributes;
        o.position >= 0 && j.enableVertexAttribArray(o.position);
        o.color >= 0 && j.enableVertexAttribArray(o.color);
        o.normal >= 0 && j.enableVertexAttribArray(o.normal);
        o.tangent >= 0 && j.enableVertexAttribArray(o.tangent);
        a.skinning && o.skinVertexA >= 0 && o.skinVertexB >= 0 && o.skinIndex >= 0 && o.skinWeight >= 0 && (j.enableVertexAttribArray(o.skinVertexA), j.enableVertexAttribArray(o.skinVertexB), j.enableVertexAttribArray(o.skinIndex), j.enableVertexAttribArray(o.skinWeight));
        if (a.attributes)
            for (g in a.attributes) o[g] !== void 0 && o[g] >= 0 && j.enableVertexAttribArray(o[g]);
        if (a.morphTargets)
            for (g = a.numSupportedMorphTargets = 0; g < this.maxMorphTargets; g++) q = "morphTarget" + g, o[q] >= 0 && (j.enableVertexAttribArray(o[q]),
                a.numSupportedMorphTargets++);
        a.uniformsList = [];
        for (e in a.uniforms) a.uniformsList.push([a.uniforms[e], e])
    };
    this.setFaceCulling = function (a, b) {
        a ? (!b || b === "ccw" ? j.frontFace(j.CCW) : j.frontFace(j.CW), a === "back" ? j.cullFace(j.BACK) : a === "front" ? j.cullFace(j.FRONT) : j.cullFace(j.FRONT_AND_BACK), j.enable(j.CULL_FACE)) : j.disable(j.CULL_FACE)
    }
};
THREE.WebGLRenderTarget = function (a, c, b) {
    this.width = a;
    this.height = c;
    b = b || {};
    this.wrapS = b.wrapS !== void 0 ? b.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = b.wrapT !== void 0 ? b.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = b.magFilter !== void 0 ? b.magFilter : THREE.LinearFilter;
    this.minFilter = b.minFilter !== void 0 ? b.minFilter : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = b.format !== void 0 ? b.format : THREE.RGBAFormat;
    this.type = b.type !== void 0 ? b.type :
        THREE.UnsignedByteType;
    this.depthBuffer = b.depthBuffer !== void 0 ? b.depthBuffer : !0;
    this.stencilBuffer = b.stencilBuffer !== void 0 ? b.stencilBuffer : !0
};
THREE.WebGLRenderTarget.prototype.clone = function () {
    var a = new THREE.WebGLRenderTarget(this.width, this.height);
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.format = this.format;
    a.type = this.type;
    a.depthBuffer = this.depthBuffer;
    a.stencilBuffer = this.stencilBuffer;
    return a
};
THREE.WebGLRenderTargetCube = function (a, c, b) {
    THREE.WebGLRenderTarget.call(this, a, c, b);
    this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = new THREE.WebGLRenderTarget;
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.RenderableVertex = function () {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function (a) {
    this.positionWorld.copy(a.positionWorld);
    this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace3 = function () {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.faceMaterial = this.material = null;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableFace4 = function () {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.v4 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.faceMaterial = this.material = null;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableObject = function () {
    this.z = this.object = null
};
THREE.RenderableParticle = function () {
    this.rotation = this.z = this.y = this.x = null;
    this.scale = new THREE.Vector2;
    this.material = null
};
THREE.RenderableLine = function () {
    this.z = null;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.material = null
};
THREE.ColorUtils = {
    adjustHSV: function (a, c, b, d) {
        var g = THREE.ColorUtils.__hsv;
        THREE.ColorUtils.rgbToHsv(a, g);
        g.h = THREE.Math.clamp(g.h + c, 0, 1);
        g.s = THREE.Math.clamp(g.s + b, 0, 1);
        g.v = THREE.Math.clamp(g.v + d, 0, 1);
        a.setHSV(g.h, g.s, g.v)
    },
    rgbToHsv: function (a, c) {
        var b = a.r,
            d = a.g,
            g = a.b,
            e = Math.max(Math.max(b, d), g),
            f = Math.min(Math.min(b, d), g);
        if (f === e) f = b = 0;
        else {
            var h = e - f,
                f = h / e,
                b = b === e ? (d - g) / h : d === e ? 2 + (g - b) / h : 4 + (b - d) / h;
            b /= 6;
            b < 0 && (b += 1);
            b > 1 && (b -= 1)
        }
        c === void 0 && (c = {
            h: 0,
            s: 0,
            v: 0
        });
        c.h = b;
        c.s = f;
        c.v = e;
        return c
    }
};
THREE.ColorUtils.__hsv = {
    h: 0,
    s: 0,
    v: 0
};
THREE.GeometryUtils = {
    merge: function (a, c) {
        for (var b, d, g = a.vertices.length, e = c instanceof THREE.Mesh ? c.geometry : c, f = a.vertices, h = e.vertices, i = a.faces, l = e.faces, k = a.faceVertexUvs[0], p = e.faceVertexUvs[0], q = {}, m = 0; m < a.materials.length; m++) q[a.materials[m].id] = m;
        if (c instanceof THREE.Mesh) c.matrixAutoUpdate && c.updateMatrix(), b = c.matrix, d = new THREE.Matrix4, d.extractRotation(b, c.scale);
        for (var m = 0, t = h.length; m < t; m++) {
            var n = new THREE.Vertex(h[m].position.clone());
            b && b.multiplyVector3(n.position);
            f.push(n)
        }
        m =
            0;
        for (t = l.length; m < t; m++) {
            var f = l[m],
                o, s, u = f.vertexNormals,
                r = f.vertexColors;
            f instanceof THREE.Face3 ? o = new THREE.Face3(f.a + g, f.b + g, f.c + g) : f instanceof THREE.Face4 && (o = new THREE.Face4(f.a + g, f.b + g, f.c + g, f.d + g));
            o.normal.copy(f.normal);
            d && d.multiplyVector3(o.normal);
            h = 0;
            for (n = u.length; h < n; h++) s = u[h].clone(), d && d.multiplyVector3(s), o.vertexNormals.push(s);
            o.color.copy(f.color);
            h = 0;
            for (n = r.length; h < n; h++) s = r[h], o.vertexColors.push(s.clone());
            if (f.materialIndex !== void 0) {
                h = e.materials[f.materialIndex];
                n = q[h.id];
                if (n === void 0) n = a.materials.length, a.materials.push(h);
                o.materialIndex = n
            }
            o.centroid.copy(f.centroid);
            b && b.multiplyVector3(o.centroid);
            i.push(o)
        }
        m = 0;
        for (t = p.length; m < t; m++) {
            b = p[m];
            d = [];
            h = 0;
            for (n = b.length; h < n; h++) d.push(new THREE.UV(b[h].u, b[h].v));
            k.push(d)
        }
    },
    clone: function (a) {
        var c = new THREE.Geometry,
            b, d = a.vertices,
            g = a.faces,
            e = a.faceVertexUvs[0];
        if (a.materials) c.materials = a.materials.slice();
        a = 0;
        for (b = d.length; a < b; a++) {
            var f = new THREE.Vertex(d[a].position.clone());
            c.vertices.push(f)
        }
        a = 0;
        for (b = g.length; a < b; a++) {
            var h = g[a],
                i, l, k = h.vertexNormals,
                p = h.vertexColors;
            h instanceof THREE.Face3 ? i = new THREE.Face3(h.a, h.b, h.c) : h instanceof THREE.Face4 && (i = new THREE.Face4(h.a, h.b, h.c, h.d));
            i.normal.copy(h.normal);
            d = 0;
            for (f = k.length; d < f; d++) l = k[d], i.vertexNormals.push(l.clone());
            i.color.copy(h.color);
            d = 0;
            for (f = p.length; d < f; d++) l = p[d], i.vertexColors.push(l.clone());
            i.materialIndex = h.materialIndex;
            i.centroid.copy(h.centroid);
            c.faces.push(i)
        }
        a = 0;
        for (b = e.length; a < b; a++) {
            g = e[a];
            i = [];
            d = 0;
            for (f = g.length; d <
                f; d++) i.push(new THREE.UV(g[d].u, g[d].v));
            c.faceVertexUvs[0].push(i)
        }
        return c
    },
    randomPointInTriangle: function (a, c, b) {
        var d, g, e, f = new THREE.Vector3,
            h = THREE.GeometryUtils.__v1;
        d = THREE.GeometryUtils.random();
        g = THREE.GeometryUtils.random();
        d + g > 1 && (d = 1 - d, g = 1 - g);
        e = 1 - d - g;
        f.copy(a);
        f.multiplyScalar(d);
        h.copy(c);
        h.multiplyScalar(g);
        f.addSelf(h);
        h.copy(b);
        h.multiplyScalar(e);
        f.addSelf(h);
        return f
    },
    randomPointInFace: function (a, c, b) {
        var d, g, e;
        if (a instanceof THREE.Face3) return d = c.vertices[a.a].position, g = c.vertices[a.b].position,
        e = c.vertices[a.c].position, THREE.GeometryUtils.randomPointInTriangle(d, g, e);
        else if (a instanceof THREE.Face4) {
            d = c.vertices[a.a].position;
            g = c.vertices[a.b].position;
            e = c.vertices[a.c].position;
            var c = c.vertices[a.d].position,
                f;
            b ? a._area1 && a._area2 ? (b = a._area1, f = a._area2) : (b = THREE.GeometryUtils.triangleArea(d, g, c), f = THREE.GeometryUtils.triangleArea(g, e, c), a._area1 = b, a._area2 = f) : (b = THREE.GeometryUtils.triangleArea(d, g, c), f = THREE.GeometryUtils.triangleArea(g, e, c));
            return THREE.GeometryUtils.random() * (b +
                f) < b ? THREE.GeometryUtils.randomPointInTriangle(d, g, c) : THREE.GeometryUtils.randomPointInTriangle(g, e, c)
        }
    },
    randomPointsInGeometry: function (a, c) {
        function b(a) {
            function b(c, d) {
                if (d < c) return c;
                var e = c + Math.floor((d - c) / 2);
                return l[e] > a ? b(c, e - 1) : l[e] < a ? b(e + 1, d) : e
            }
            return b(0, l.length - 1)
        }
        var d, g, e = a.faces,
            f = a.vertices,
            h = e.length,
            i = 0,
            l = [],
            k, p, q, m;
        for (g = 0; g < h; g++) {
            d = e[g];
            if (d instanceof THREE.Face3) k = f[d.a].position, p = f[d.b].position, q = f[d.c].position, d._area = THREE.GeometryUtils.triangleArea(k, p, q);
            else if (d instanceof THREE.Face4) k = f[d.a].position, p = f[d.b].position, q = f[d.c].position, m = f[d.d].position, d._area1 = THREE.GeometryUtils.triangleArea(k, p, m), d._area2 = THREE.GeometryUtils.triangleArea(p, q, m), d._area = d._area1 + d._area2;
            i += d._area;
            l[g] = i
        }
        d = [];
        f = {};
        for (g = 0; g < c; g++) h = THREE.GeometryUtils.random() * i, h = b(h), d[g] = THREE.GeometryUtils.randomPointInFace(e[h], a, !0), f[h] ? f[h] += 1 : f[h] = 1;
        return d
    },
    triangleArea: function (a, c, b) {
        var d, g = THREE.GeometryUtils.__v1;
        g.sub(a, c);
        d = g.length();
        g.sub(a, b);
        a = g.length();
        g.sub(c, b);
        b = g.length();
        c = 0.5 * (d + a + b);
        return Math.sqrt(c * (c - d) * (c - a) * (c - b))
    },
    center: function (a) {
        a.computeBoundingBox();
        var c = new THREE.Matrix4;
        c.setTranslation(-0.5 * (a.boundingBox.x[1] + a.boundingBox.x[0]), -0.5 * (a.boundingBox.y[1] + a.boundingBox.y[0]), -0.5 * (a.boundingBox.z[1] + a.boundingBox.z[0]));
        a.applyMatrix(c);
        a.computeBoundingBox()
    }
};
THREE.GeometryUtils.random = THREE.Math.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.ImageUtils = {
    loadTexture: function (a, c, b) {
        var d = new Image,
            g = new THREE.Texture(d, c);
        d.onload = function () {
            g.needsUpdate = !0;
            b && b(this)
        };
        d.crossOrigin = "";
        d.src = a;
        return g
    },
    loadTextureCube: function (a, c, b) {
        var d, g = [],
            e = new THREE.Texture(g, c),
            c = g.loadCount = 0;
        for (d = a.length; c < d; ++c) g[c] = new Image, g[c].onload = function () {
            g.loadCount += 1;
            if (g.loadCount === 6) e.needsUpdate = !0;
            b && b(this)
        }, g[c].crossOrigin = "", g[c].src = a[c];
        return e
    },
    getNormalMap: function (a, c) {
        var b = function (a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] +
                a[2] * a[2]);
            return [a[0] / b, a[1] / b, a[2] / b]
        };
        c |= 1;
        var d = a.width,
            g = a.height,
            e = document.createElement("canvas");
        e.width = d;
        e.height = g;
        var f = e.getContext("2d");
        f.drawImage(a, 0, 0);
        for (var h = f.getImageData(0, 0, d, g).data, i = f.createImageData(d, g), l = i.data, k = 0; k < d; k++)
            for (var p = 1; p < g; p++) {
                var q = p - 1 < 0 ? g - 1 : p - 1,
                    m = (p + 1) % g,
                    t = k - 1 < 0 ? d - 1 : k - 1,
                    n = (k + 1) % d,
                    o = [],
                    s = [0, 0, h[(p * d + k) * 4] / 255 * c];
                o.push([-1, 0, h[(p * d + t) * 4] / 255 * c]);
                o.push([-1, -1, h[(q * d + t) * 4] / 255 * c]);
                o.push([0, -1, h[(q * d + k) * 4] / 255 * c]);
                o.push([1, -1, h[(q * d + n) * 4] / 255 * c]);
                o.push([1, 0, h[(p * d + n) * 4] / 255 * c]);
                o.push([1, 1, h[(m * d + n) * 4] / 255 * c]);
                o.push([0, 1, h[(m * d + k) * 4] / 255 * c]);
                o.push([-1, 1, h[(m * d + t) * 4] / 255 * c]);
                q = [];
                t = o.length;
                for (m = 0; m < t; m++) {
                    var n = o[m],
                        u = o[(m + 1) % t],
                        n = [n[0] - s[0], n[1] - s[1], n[2] - s[2]],
                        u = [u[0] - s[0], u[1] - s[1], u[2] - s[2]];
                    q.push(b([n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]]))
                }
                o = [0, 0, 0];
                for (m = 0; m < q.length; m++) o[0] += q[m][0], o[1] += q[m][1], o[2] += q[m][2];
                o[0] /= q.length;
                o[1] /= q.length;
                o[2] /= q.length;
                s = (p * d + k) * 4;
                l[s] = (o[0] + 1) / 2 * 255 | 0;
                l[s + 1] = (o[1] + 0.5) *
                    255 | 0;
                l[s + 2] = o[2] * 255 | 0;
                l[s + 3] = 255
            }
        f.putImageData(i, 0, 0);
        return e
    }
};
THREE.SceneUtils = {
    showHierarchy: function (a, c) {
        THREE.SceneUtils.traverseHierarchy(a, function (a) {
            a.visible = c
        })
    },
    traverseHierarchy: function (a, c) {
        var b, d, g = a.children.length;
        for (d = 0; d < g; d++) b = a.children[d], c(b), THREE.SceneUtils.traverseHierarchy(b, c)
    },
    createMultiMaterialObject: function (a, c) {
        var b, d = c.length,
            g = new THREE.Object3D;
        for (b = 0; b < d; b++) {
            var e = new THREE.Mesh(a, c[b]);
            g.add(e)
        }
        return g
    }
};
if (THREE.WebGLRenderer) THREE.ShaderUtils = {
    lib: {
        fresnel: {
            uniforms: {
                mRefractionRatio: {
                    type: "f",
                    value: 1.02
                },
                mFresnelBias: {
                    type: "f",
                    value: 0.1
                },
                mFresnelPower: {
                    type: "f",
                    value: 2
                },
                mFresnelScale: {
                    type: "f",
                    value: 1
                },
                tCube: {
                    type: "t",
                    value: 1,
                    texture: null
                }
            },
            fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
            vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
        },
        normal: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                enableAO: {
                    type: "i",
                    value: 0
                },
                enableDiffuse: {
                    type: "i",
                    value: 0
                },
                enableSpecular: {
                    type: "i",
                    value: 0
                },
                enableReflection: {
                    type: "i",
                    value: 0
                },
                tDiffuse: {
                    type: "t",
                    value: 0,
                    texture: null
                },
                tCube: {
                    type: "t",
                    value: 1,
                    texture: null
                },
                tNormal: {
                    type: "t",
                    value: 2,
                    texture: null
                },
                tSpecular: {
                    type: "t",
                    value: 3,
                    texture: null
                },
                tAO: {
                    type: "t",
                    value: 4,
                    texture: null
                },
                tDisplacement: {
                    type: "t",
                    value: 5,
                    texture: null
                },
                uNormalScale: {
                    type: "f",
                    value: 1
                },
                uDisplacementBias: {
                    type: "f",
                    value: 0
                },
                uDisplacementScale: {
                    type: "f",
                    value: 1
                },
                uDiffuseColor: {
                    type: "c",
                    value: new THREE.Color(15658734)
                },
                uSpecularColor: {
                    type: "c",
                    value: new THREE.Color(1118481)
                },
                uAmbientColor: {
                    type: "c",
                    value: new THREE.Color(328965)
                },
                uShininess: {
                    type: "f",
                    value: 30
                },
                uOpacity: {
                    type: "f",
                    value: 1
                },
                uReflectivity: {
                    type: "f",
                    value: 0.5
                },
                uOffset: {
                    type: "v2",
                    value: new THREE.Vector2(0, 0)
                },
                uRepeat: {
                    type: "v2",
                    value: new THREE.Vector2(1, 1)
                }
            }]),
            fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform float uNormalScale;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;",
                THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\nif( enableAO )\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + viewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor) + totalSpecular;\nif ( enableReflection ) {\nvec3 wPos = cameraPosition - vViewPosition;\nvec3 vReflect = reflect( normalize( wPos ), normal );\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, uReflectivity );\n}",
                THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"
            ].join("\n"),
            vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;",
                THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvViewPosition = -mvPosition.xyz;\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv * uRepeat + uOffset;\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif",
                THREE.ShaderChunk.shadowmap_vertex, "}"
            ].join("\n")
        },
        cube: {
            uniforms: {
                tCube: {
                    type: "t",
                    value: 1,
                    texture: null
                },
                tFlip: {
                    type: "f",
                    value: -1
                }
            },
            vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader: "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( tFlip * wPos.x, wPos.yz ) );\n}"
        }
    }
};
THREE.Curve = function () {};
THREE.Curve.prototype.getPoint = function () {
    console.log("Warning, getPoint() not implemented!");
    return null
};
THREE.Curve.prototype.getPointAt = function (a) {
    return this.getPoint(this.getUtoTmapping(a))
};
THREE.Curve.prototype.getPoints = function (a) {
    a || (a = 5);
    var c, b = [];
    for (c = 0; c <= a; c++) b.push(this.getPoint(c / a));
    return b
};
THREE.Curve.prototype.getSpacedPoints = function (a) {
    a || (a = 5);
    var c, b = [];
    for (c = 0; c <= a; c++) b.push(this.getPointAt(c / a));
    return b
};
THREE.Curve.prototype.getLength = function () {
    var a = this.getLengths();
    return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function (a) {
    a || (a = 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1) return this.cacheArcLengths;
    var c = [],
        b, d = this.getPoint(0),
        g, e = 0;
    c.push(0);
    for (g = 1; g <= a; g++) b = this.getPoint(g / a), e += b.distanceTo(d), c.push(e), d = b;
    return this.cacheArcLengths = c
};
THREE.Curve.prototype.getUtoTmapping = function (a, c) {
    var b = this.getLengths(),
        d = 0,
        g = b.length,
        e;
    e = c ? c : a * b[g - 1];
    Date.now();
    for (var f = 0, h = g - 1, i; f <= h;)
        if (d = Math.floor(f + (h - f) / 2), i = b[d] - e, i < 0) f = d + 1;
        else if (i > 0) h = d - 1;
    else {
        h = d;
        break
    }
    d = h;
    if (b[d] == e) return d / (g - 1);
    f = b[d];
    return b = (d + (e - f) / (b[d + 1] - f)) / (g - 1)
};
THREE.Curve.prototype.getNormalVector = function (a) {
    a = this.getTangent(a);
    return new THREE.Vector2(-a.y, a.x)
};
THREE.Curve.prototype.getTangent = function (a) {
    var c = a - 1.0E-4;
    a += 1.0E-4;
    c < 0 && (c = 0);
    a > 1 && (a = 1);
    var c = this.getPoint(c),
        a = this.getPoint(a),
        b = new THREE.Vector2;
    b.sub(a, c);
    return b.unit()
};
THREE.LineCurve = function (a, c) {
    a instanceof THREE.Vector2 ? (this.v1 = a, this.v2 = c) : THREE.LineCurve.oldConstructor.apply(this, arguments)
};
THREE.LineCurve.oldConstructor = function (a, c, b, d) {
    this.constructor(new THREE.Vector2(a, c), new THREE.Vector2(b, d))
};
THREE.LineCurve.prototype = new THREE.Curve;
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function (a) {
    var c = new THREE.Vector2;
    c.sub(this.v2, this.v1);
    c.multiplyScalar(a).addSelf(this.v1);
    return c
};
THREE.LineCurve.prototype.getPointAt = function (a) {
    return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function () {
    var a = new THREE.Vector2;
    a.sub(this.v2, this.v1);
    a.normalize();
    return a
};
THREE.QuadraticBezierCurve = function (a, c, b) {
    if (!(c instanceof THREE.Vector2)) var d = Array.prototype.slice.call(arguments),
    a = new THREE.Vector2(d[0], d[1]), c = new THREE.Vector2(d[2], d[3]), b = new THREE.Vector2(d[4], d[5]);
    this.v0 = a;
    this.v1 = c;
    this.v2 = b
};
THREE.QuadraticBezierCurve.prototype = new THREE.Curve;
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
    var c;
    c = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    return new THREE.Vector2(c, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
    var c;
    c = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
    c = new THREE.Vector2(c, a);
    c.normalize();
    return c
};
THREE.CubicBezierCurve = function (a, c, b, d) {
    if (!(c instanceof THREE.Vector2)) var g = Array.prototype.slice.call(arguments),
    a = new THREE.Vector2(g[0], g[1]), c = new THREE.Vector2(g[2], g[3]), b = new THREE.Vector2(g[4], g[5]), d = new THREE.Vector2(g[6], g[7]);
    this.v0 = a;
    this.v1 = c;
    this.v2 = b;
    this.v3 = d
};
THREE.CubicBezierCurve.prototype = new THREE.Curve;
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function (a) {
    var c;
    c = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(c, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function (a) {
    var c;
    c = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    c = new THREE.Vector2(c, a);
    c.normalize();
    return c
};
THREE.SplineCurve = function (a) {
    this.points = a
};
THREE.SplineCurve.prototype = new THREE.Curve;
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function (a) {
    var c = new THREE.Vector2,
        b = [],
        d = this.points,
        g;
    g = (d.length - 1) * a;
    a = Math.floor(g);
    g -= a;
    b[0] = a == 0 ? a : a - 1;
    b[1] = a;
    b[2] = a > d.length - 2 ? a : a + 1;
    b[3] = a > d.length - 3 ? a : a + 2;
    c.x = THREE.Curve.Utils.interpolate(d[b[0]].x, d[b[1]].x, d[b[2]].x, d[b[3]].x, g);
    c.y = THREE.Curve.Utils.interpolate(d[b[0]].y, d[b[1]].y, d[b[2]].y, d[b[3]].y, g);
    return c
};
THREE.ArcCurve = function (a, c, b, d, g, e) {
    this.aX = a;
    this.aY = c;
    this.aRadius = b;
    this.aStartAngle = d;
    this.aEndAngle = g;
    this.aClockwise = e
};
THREE.ArcCurve.prototype = new THREE.Curve;
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.ArcCurve.prototype.getPoint = function (a) {
    var c = this.aEndAngle - this.aStartAngle;
    this.aClockwise || (a = 1 - a);
    a = this.aStartAngle + a * c;
    return new THREE.Vector2(this.aX + this.aRadius * Math.cos(a), this.aY + this.aRadius * Math.sin(a))
};
THREE.Curve.Utils = {
    tangentQuadraticBezier: function (a, c, b, d) {
        return 2 * (1 - a) * (b - c) + 2 * a * (d - b)
    },
    tangentCubicBezier: function (a, c, b, d, g) {
        return -3 * c * (1 - a) * (1 - a) + 3 * b * (1 - a) * (1 - a) - 6 * a * b * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * g
    },
    tangentSpline: function (a) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },
    interpolate: function (a, c, b, d, g) {
        var a = (b - a) * 0.5,
            d = (d - c) * 0.5,
            e = g * g;
        return (2 * c - 2 * b + a + d) * g * e + (-3 * c + 3 * b - 2 * a - d) * e + a * g + c
    }
};
THREE.Curve.create = function (a, c) {
    a.prototype = new THREE.Curve;
    a.prototype.constructor = a;
    a.prototype.getPoint = c;
    return a
};
THREE.LineCurve3 = THREE.Curve.create(function (a, c) {
    this.v1 = a;
    this.v2 = c
}, function (a) {
    var c = new THREE.Vector3;
    c.sub(this.v2, this.v1);
    c.multiplyScalar(a);
    c.addSelf(this.v1);
    return c
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, c, b) {
    this.v0 = a;
    this.v1 = c;
    this.v2 = b
}, function (a) {
    var c, b;
    c = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    b = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
    return new THREE.Vector3(c, b, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, c, b, d) {
    this.v0 = a;
    this.v1 = c;
    this.v2 = b;
    this.v3 = d
}, function (a) {
    var c, b;
    c = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    b = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
    return new THREE.Vector3(c, b, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
    this.points = a
}, function (a) {
    var c = new THREE.Vector3,
        b = [],
        d = this.points,
        g;
    g = (d.length - 1) * a;
    a = Math.floor(g);
    g -= a;
    b[0] = a == 0 ? a : a - 1;
    b[1] = a;
    b[2] = a > d.length - 2 ? a : a + 1;
    b[3] = a > d.length - 3 ? a : a + 2;
    c.x = THREE.Curve.Utils.interpolate(d[b[0]].x, d[b[1]].x, d[b[2]].x, d[b[3]].x, g);
    c.y = THREE.Curve.Utils.interpolate(d[b[0]].y, d[b[1]].y, d[b[2]].y, d[b[3]].y, g);
    c.z = THREE.Curve.Utils.interpolate(d[b[0]].z, d[b[1]].z, d[b[2]].z, d[b[3]].z, g);
    return c
});
THREE.CurvePath = function () {
    this.curves = [];
    this.bends = []
};
THREE.CurvePath.prototype = new THREE.Curve;
THREE.CurvePath.prototype.constructor = THREE.CurvePath;
THREE.CurvePath.prototype.add = function (a) {
    this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function () {};
THREE.CurvePath.prototype.closePath = function () {};
THREE.CurvePath.prototype.getPoint = function (a) {
    for (var c = a * this.getLength(), b = this.getCurveLengths(), a = 0; a < b.length;) {
        if (b[a] >= c) return c = b[a] - c, a = this.curves[a], c = 1 - c / a.getLength(), a.getPointAt(c);
        a++
    }
    return null
};
THREE.CurvePath.prototype.getLength = function () {
    var a = this.getCurveLengths();
    return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
    var a = [],
        c = 0,
        b, d = this.curves.length;
    for (b = 0; b < d; b++) c += this.curves[b].getLength(), a.push(c);
    return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function () {
    var a = this.getPoints(),
        c, b, d, g;
    c = b = Number.NEGATIVE_INFINITY;
    d = g = Number.POSITIVE_INFINITY;
    var e, f, h, i;
    i = new THREE.Vector2;
    f = 0;
    for (h = a.length; f < h; f++) {
        e = a[f];
        if (e.x > c) c = e.x;
        else if (e.x < d) d = e.x;
        if (e.y > b) b = e.y;
        else if (e.y < b) g = e.y;
        i.addSelf(e.x, e.y)
    }
    return {
        minX: d,
        minY: g,
        maxX: c,
        maxY: b,
        centroid: i.divideScalar(h)
    }
};
THREE.CurvePath.prototype.createPointsGeometry = function (a) {
    return this.createGeometry(this.getPoints(a, !0))
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
    return this.createGeometry(this.getSpacedPoints(a, !0))
};
THREE.CurvePath.prototype.createGeometry = function (a) {
    for (var c = new THREE.Geometry, b = 0; b < a.length; b++) c.vertices.push(new THREE.Vertex(new THREE.Vector3(a[b].x, a[b].y, 0)));
    return c
};
THREE.CurvePath.prototype.addWrapPath = function (a) {
    this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function (a, c) {
    var b = this.getPoints(a),
        d, g;
    if (!c) c = this.bends;
    d = 0;
    for (g = c.length; d < g; d++) b = this.getWrapPoints(b, c[d]);
    return b
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, c) {
    var b = this.getSpacedPoints(a),
        d, g;
    if (!c) c = this.bends;
    d = 0;
    for (g = c.length; d < g; d++) b = this.getWrapPoints(b, c[d]);
    return b
};
THREE.CurvePath.prototype.getWrapPoints = function (a, c) {
    var b = this.getBoundingBox(),
        d, g, e, f, h, i;
    d = 0;
    for (g = a.length; d < g; d++) e = a[d], f = e.x, h = e.y, i = f / b.maxX, i = c.getUtoTmapping(i, f), f = c.getPoint(i), h = c.getNormalVector(i).multiplyScalar(h), e.x = f.x + h.x, e.y = f.y + h.y;
    return a
};
THREE.Path = function (a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
};
THREE.Path.prototype = new THREE.CurvePath;
THREE.Path.prototype.constructor = THREE.Path;
THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc"
};
THREE.Path.prototype.fromPoints = function (a) {
    this.moveTo(a[0].x, a[0].y);
    var c, b = a.length;
    for (c = 1; c < b; c++) this.lineTo(a[c].x, a[c].y)
};
THREE.Path.prototype.moveTo = function () {
    var a = Array.prototype.slice.call(arguments);
    this.actions.push({
        action: THREE.PathActions.MOVE_TO,
        args: a
    })
};
THREE.Path.prototype.lineTo = function (a, c) {
    var b = Array.prototype.slice.call(arguments),
        d = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, c)));
    this.actions.push({
        action: THREE.PathActions.LINE_TO,
        args: b
    })
};
THREE.Path.prototype.quadraticCurveTo = function (a, c, b, d) {
    var g = Array.prototype.slice.call(arguments),
        e = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.QuadraticBezierCurve(new THREE.Vector2(e[e.length - 2], e[e.length - 1]), new THREE.Vector2(a, c), new THREE.Vector2(b, d)));
    this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: g
    })
};
THREE.Path.prototype.bezierCurveTo = function (a, c, b, d, g, e) {
    var f = Array.prototype.slice.call(arguments),
        h = this.actions[this.actions.length - 1].args;
    this.curves.push(new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, c), new THREE.Vector2(b, d), new THREE.Vector2(g, e)));
    this.actions.push({
        action: THREE.PathActions.BEZIER_CURVE_TO,
        args: f
    })
};
THREE.Path.prototype.splineThru = function (a) {
    var c = Array.prototype.slice.call(arguments),
        b = this.actions[this.actions.length - 1].args,
        b = [new THREE.Vector2(b[b.length - 2], b[b.length - 1])];
    Array.prototype.push.apply(b, a);
    this.curves.push(new THREE.SplineCurve(b));
    this.actions.push({
        action: THREE.PathActions.CSPLINE_THRU,
        args: c
    })
};
THREE.Path.prototype.arc = function (a, c, b, d, g, e) {
    var f = Array.prototype.slice.call(arguments);
    this.curves.push(new THREE.ArcCurve(a, c, b, d, g, e));
    this.actions.push({
        action: THREE.PathActions.ARC,
        args: f
    })
};
THREE.Path.prototype.getSpacedPoints = function (a) {
    a || (a = 40);
    for (var c = [], b = 0; b < a; b++) c.push(this.getPoint(b / a));
    return c
};
THREE.Path.prototype.getPoints = function (a, c) {
    var a = a || 12,
        b = [],
        d, g, e, f, h, i, l, k, p, q, m, t, n;
    d = 0;
    for (g = this.actions.length; d < g; d++) switch (e = this.actions[d], f = e.action, e = e.args, f) {
    case THREE.PathActions.LINE_TO:
        b.push(new THREE.Vector2(e[0], e[1]));
        break;
    case THREE.PathActions.QUADRATIC_CURVE_TO:
        h = e[2];
        i = e[3];
        p = e[0];
        q = e[1];
        b.length > 0 ? (f = b[b.length - 1], m = f.x, t = f.y) : (f = this.actions[d - 1].args, m = f[f.length - 2], t = f[f.length - 1]);
        for (f = 1; f <= a; f++) n = f / a, e = THREE.Shape.Utils.b2(n, m, p, h), n = THREE.Shape.Utils.b2(n, t, q,
            i), b.push(new THREE.Vector2(e, n));
        break;
    case THREE.PathActions.BEZIER_CURVE_TO:
        h = e[4];
        i = e[5];
        p = e[0];
        q = e[1];
        l = e[2];
        k = e[3];
        b.length > 0 ? (f = b[b.length - 1], m = f.x, t = f.y) : (f = this.actions[d - 1].args, m = f[f.length - 2], t = f[f.length - 1]);
        for (f = 1; f <= a; f++) n = f / a, e = THREE.Shape.Utils.b3(n, m, p, l, h), n = THREE.Shape.Utils.b3(n, t, q, k, i), b.push(new THREE.Vector2(e, n));
        break;
    case THREE.PathActions.CSPLINE_THRU:
        f = this.actions[d - 1].args;
        f = [new THREE.Vector2(f[f.length - 2], f[f.length - 1])];
        n = a * e[0].length;
        f = f.concat(e[0]);
        e = new THREE.SplineCurve(f);
        for (f = 1; f <= n; f++) b.push(e.getPointAt(f / n));
        break;
    case THREE.PathActions.ARC:
        f = this.actions[d - 1].args;
        h = e[0];
        i = e[1];
        l = e[2];
        p = e[3];
        n = e[4];
        q = !! e[5];
        k = f[f.length - 2];
        m = f[f.length - 1];
        f.length == 0 && (k = m = 0);
        t = n - p;
        var o = a * 2;
        for (f = 1; f <= o; f++) n = f / o, q || (n = 1 - n), n = p + n * t, e = k + h + l * Math.cos(n), n = m + i + l * Math.sin(n), b.push(new THREE.Vector2(e, n))
    }
    c && b.push(b[0]);
    return b
};
THREE.Path.prototype.transform = function (a, c) {
    this.getBoundingBox();
    return this.getWrapPoints(this.getPoints(c), a)
};
THREE.Path.prototype.nltransform = function (a, c, b, d, g, e) {
    var f = this.getPoints(),
        h, i, l, k, p;
    h = 0;
    for (i = f.length; h < i; h++) l = f[h], k = l.x, p = l.y, l.x = a * k + c * p + b, l.y = d * p + g * k + e;
    return f
};
THREE.Path.prototype.debug = function (a) {
    var c = this.getBoundingBox();
    a || (a = document.createElement("canvas"), a.setAttribute("width", c.maxX + 100), a.setAttribute("height", c.maxY + 100), document.body.appendChild(a));
    c = a.getContext("2d");
    c.fillStyle = "white";
    c.fillRect(0, 0, a.width, a.height);
    c.strokeStyle = "black";
    c.beginPath();
    var b, d, g, a = 0;
    for (b = this.actions.length; a < b; a++) d = this.actions[a], g = d.args, d = d.action, d != THREE.PathActions.CSPLINE_THRU && c[d].apply(c, g);
    c.stroke();
    c.closePath();
    c.strokeStyle = "red";
    d =
        this.getPoints();
    a = 0;
    for (b = d.length; a < b; a++) g = d[a], c.beginPath(), c.arc(g.x, g.y, 1.5, 0, Math.PI * 2, !1), c.stroke(), c.closePath()
};
THREE.Path.prototype.toShapes = function () {
    var a, c, b, d, g = [],
        e = new THREE.Path;
    a = 0;
    for (c = this.actions.length; a < c; a++) b = this.actions[a], d = b.args, b = b.action, b == THREE.PathActions.MOVE_TO && e.actions.length != 0 && (g.push(e), e = new THREE.Path), e[b].apply(e, d);
    e.actions.length != 0 && g.push(e);
    if (g.length == 0) return [];
    var f, e = [];
    if (THREE.Shape.Utils.isClockWise(g[0].getPoints())) {
        a = 0;
        for (c = g.length; a < c; a++) d = g[a], THREE.Shape.Utils.isClockWise(d.getPoints()) ? (f && e.push(f), f = new THREE.Shape, f.actions = d.actions, f.curves =
            d.curves) : f.holes.push(d);
        e.push(f)
    } else {
        f = new THREE.Shape;
        a = 0;
        for (c = g.length; a < c; a++) d = g[a], THREE.Shape.Utils.isClockWise(d.getPoints()) ? (f.actions = d.actions, f.curves = d.curves, e.push(f), f = new THREE.Shape) : f.holes.push(d)
    }
    return e
};
THREE.Shape = function () {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = new THREE.Path;
THREE.Shape.prototype.constructor = THREE.Path;
THREE.Shape.prototype.extrude = function (a) {
    return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function (a) {
    var c, b = this.holes.length,
        d = [];
    for (c = 0; c < b; c++) d[c] = this.holes[c].getTransformedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
    var c, b = this.holes.length,
        d = [];
    for (c = 0; c < b; c++) d[c] = this.holes[c].getTransformedSpacedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.extractAllPoints = function (a) {
    return {
        shape: this.getTransformedPoints(a),
        holes: this.getPointsHoles(a)
    }
};
THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
    return {
        shape: this.getTransformedSpacedPoints(a),
        holes: this.getSpacedPointsHoles(a)
    }
};
THREE.Shape.Utils = {
    removeHoles: function (a, c) {
        var b = a.concat(),
            d = b.concat(),
            g, e, f, h, i, l, k, p, q, m, t = [];
        for (i = 0; i < c.length; i++) {
            l = c[i];
            Array.prototype.push.apply(d, l);
            e = Number.POSITIVE_INFINITY;
            for (g = 0; g < l.length; g++) {
                q = l[g];
                m = [];
                for (p = 0; p < b.length; p++) k = b[p], k = q.distanceToSquared(k), m.push(k), k < e && (e = k, f = g, h = p)
            }
            g = h - 1 >= 0 ? h - 1 : b.length - 1;
            e = f - 1 >= 0 ? f - 1 : l.length - 1;
            var n = [l[f], b[h], b[g]];
            p = THREE.FontUtils.Triangulate.area(n);
            var o = [l[f], l[e], b[h]];
            q = THREE.FontUtils.Triangulate.area(o);
            m = h;
            k = f;
            h += 1;
            f += -1;
            h <
                0 && (h += b.length);
            h %= b.length;
            f < 0 && (f += l.length);
            f %= l.length;
            g = h - 1 >= 0 ? h - 1 : b.length - 1;
            e = f - 1 >= 0 ? f - 1 : l.length - 1;
            n = [l[f], b[h], b[g]];
            n = THREE.FontUtils.Triangulate.area(n);
            o = [l[f], l[e], b[h]];
            o = THREE.FontUtils.Triangulate.area(o);
            p + q > n + o && (h = m, f = k, h < 0 && (h += b.length), h %= b.length, f < 0 && (f += l.length), f %= l.length, g = h - 1 >= 0 ? h - 1 : b.length - 1, e = f - 1 >= 0 ? f - 1 : l.length - 1);
            p = b.slice(0, h);
            q = b.slice(h);
            m = l.slice(f);
            k = l.slice(0, f);
            e = [l[f], l[e], b[h]];
            t.push([l[f], b[h], b[g]]);
            t.push(e);
            b = p.concat(m).concat(k).concat(q)
        }
        return {
            shape: b,
            isolatedPts: t,
            allpoints: d
        }
    },
    triangulateShape: function (a, c) {
        var b = THREE.Shape.Utils.removeHoles(a, c),
            d = b.allpoints,
            g = b.isolatedPts,
            b = THREE.FontUtils.Triangulate(b.shape, !1),
            e, f, h, i, l = {};
        e = 0;
        for (f = d.length; e < f; e++) i = d[e].x + ":" + d[e].y, l[i] !== void 0 && console.log("Duplicate point", i), l[i] = e;
        e = 0;
        for (f = b.length; e < f; e++) {
            h = b[e];
            for (d = 0; d < 3; d++) i = h[d].x + ":" + h[d].y, i = l[i], i !== void 0 && (h[d] = i)
        }
        e = 0;
        for (f = g.length; e < f; e++) {
            h = g[e];
            for (d = 0; d < 3; d++) i = h[d].x + ":" + h[d].y, i = l[i], i !== void 0 && (h[d] = i)
        }
        return b.concat(g)
    },
    isClockWise: function (a) {
        return THREE.FontUtils.Triangulate.area(a) < 0
    },
    b2p0: function (a, c) {
        var b = 1 - a;
        return b * b * c
    },
    b2p1: function (a, c) {
        return 2 * (1 - a) * a * c
    },
    b2p2: function (a, c) {
        return a * a * c
    },
    b2: function (a, c, b, d) {
        return this.b2p0(a, c) + this.b2p1(a, b) + this.b2p2(a, d)
    },
    b3p0: function (a, c) {
        var b = 1 - a;
        return b * b * b * c
    },
    b3p1: function (a, c) {
        var b = 1 - a;
        return 3 * b * b * a * c
    },
    b3p2: function (a, c) {
        return 3 * (1 - a) * a * a * c
    },
    b3p3: function (a, c) {
        return a * a * a * c
    },
    b3: function (a, c, b, d, g) {
        return this.b3p0(a, c) + this.b3p1(a, b) + this.b3p2(a, d) +
            this.b3p3(a, g)
    }
};
THREE.TextPath = function (a, c) {
    THREE.Path.call(this);
    this.parameters = c || {};
    this.set(a)
};
THREE.TextPath.prototype.set = function (a, c) {
    this.text = a;
    var c = c || this.parameters,
        b = c.curveSegments !== void 0 ? c.curveSegments : 4,
        d = c.font !== void 0 ? c.font : "helvetiker",
        g = c.weight !== void 0 ? c.weight : "normal",
        e = c.style !== void 0 ? c.style : "normal";
    THREE.FontUtils.size = c.size !== void 0 ? c.size : 100;
    THREE.FontUtils.divisions = b;
    THREE.FontUtils.face = d;
    THREE.FontUtils.weight = g;
    THREE.FontUtils.style = e
};
THREE.TextPath.prototype.toShapes = function () {
    for (var a = THREE.FontUtils.drawText(this.text).paths, c = [], b = 0, d = a.length; b < d; b++) Array.prototype.push.apply(c, a[b].toShapes());
    return c
};
THREE.AnimationHandler = function () {
    var a = [],
        c = {}, b = {
            update: function (b) {
                for (var c = 0; c < a.length; c++) a[c].update(b)
            },
            addToUpdate: function (b) {
                a.indexOf(b) === -1 && a.push(b)
            },
            removeFromUpdate: function (b) {
                b = a.indexOf(b);
                b !== -1 && a.splice(b, 1)
            },
            add: function (a) {
                c[a.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + a.name + " already exists in library. Overwriting.");
                c[a.name] = a;
                if (a.initialized !== !0) {
                    for (var b = 0; b < a.hierarchy.length; b++) {
                        for (var d = 0; d < a.hierarchy[b].keys.length; d++) {
                            if (a.hierarchy[b].keys[d].time <
                                0) a.hierarchy[b].keys[d].time = 0;
                            if (a.hierarchy[b].keys[d].rot !== void 0 && !(a.hierarchy[b].keys[d].rot instanceof THREE.Quaternion)) {
                                var h = a.hierarchy[b].keys[d].rot;
                                a.hierarchy[b].keys[d].rot = new THREE.Quaternion(h[0], h[1], h[2], h[3])
                            }
                        }
                        if (a.hierarchy[b].keys[0].morphTargets !== void 0) {
                            h = {};
                            for (d = 0; d < a.hierarchy[b].keys.length; d++)
                                for (var i = 0; i < a.hierarchy[b].keys[d].morphTargets.length; i++) {
                                    var l = a.hierarchy[b].keys[d].morphTargets[i];
                                    h[l] = -1
                                }
                            a.hierarchy[b].usedMorphTargets = h;
                            for (d = 0; d < a.hierarchy[b].keys.length; d++) {
                                var k = {};
                                for (l in h) {
                                    for (i = 0; i < a.hierarchy[b].keys[d].morphTargets.length; i++)
                                        if (a.hierarchy[b].keys[d].morphTargets[i] === l) {
                                            k[l] = a.hierarchy[b].keys[d].morphTargetsInfluences[i];
                                            break
                                        }
                                    i === a.hierarchy[b].keys[d].morphTargets.length && (k[l] = 0)
                                }
                                a.hierarchy[b].keys[d].morphTargetsInfluences = k
                            }
                        }
                        for (d = 1; d < a.hierarchy[b].keys.length; d++) a.hierarchy[b].keys[d].time === a.hierarchy[b].keys[d - 1].time && (a.hierarchy[b].keys.splice(d, 1), d--);
                        for (d = 1; d < a.hierarchy[b].keys.length; d++) a.hierarchy[b].keys[d].index = d
                    }
                    d = parseInt(a.length *
                        a.fps, 10);
                    a.JIT = {};
                    a.JIT.hierarchy = [];
                    for (b = 0; b < a.hierarchy.length; b++) a.JIT.hierarchy.push(Array(d));
                    a.initialized = !0
                }
            },
            get: function (a) {
                if (typeof a === "string") return c[a] ? c[a] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + a), null)
            },
            parse: function (a) {
                var b = [];
                if (a instanceof THREE.SkinnedMesh)
                    for (var c = 0; c < a.bones.length; c++) b.push(a.bones[c]);
                else d(a, b);
                return b
            }
        }, d = function (a, b) {
            b.push(a);
            for (var c = 0; c < a.children.length; c++) d(a.children[c], b)
        };
    b.LINEAR = 0;
    b.CATMULLROM = 1;
    b.CATMULLROM_FORWARD =
        2;
    return b
}();
THREE.Animation = function (a, c, b, d) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(c);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = b !== void 0 ? b : THREE.AnimationHandler.LINEAR;
    this.JITCompile = d !== void 0 ? d : !0;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function (a, c) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = a !== void 0 ? a : !0;
        this.currentTime = c !== void 0 ? c : 0;
        var b, d = this.hierarchy.length,
            g;
        for (b = 0; b < d; b++) {
            g = this.hierarchy[b];
            if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD) g.useQuaternion = !0;
            g.matrixAutoUpdate = !0;
            if (g.animationCache === void 0) g.animationCache = {}, g.animationCache.prevKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, g.animationCache.nextKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, g.animationCache.originalMatrix = g instanceof
            THREE.Bone ? g.skinMatrix : g.matrix;
            var e = g.animationCache.prevKey;
            g = g.animationCache.nextKey;
            e.pos = this.data.hierarchy[b].keys[0];
            e.rot = this.data.hierarchy[b].keys[0];
            e.scl = this.data.hierarchy[b].keys[0];
            g.pos = this.getNextKeyWith("pos", b, 1);
            g.rot = this.getNextKeyWith("rot", b, 1);
            g.scl = this.getNextKeyWith("scl", b, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function () {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function () {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var a = 0; a < this.hierarchy.length; a++)
        if (this.hierarchy[a].animationCache !== void 0) this.hierarchy[a] instanceof THREE.Bone ? this.hierarchy[a].skinMatrix = this.hierarchy[a].animationCache.originalMatrix : this.hierarchy[a].matrix = this.hierarchy[a].animationCache.originalMatrix, delete this.hierarchy[a].animationCache
};
THREE.Animation.prototype.update = function (a) {
    if (this.isPlaying) {
        var c = ["pos", "rot", "scl"],
            b, d, g, e, f, h, i, l, k = this.data.JIT.hierarchy,
            p, q;
        this.currentTime += a * this.timeScale;
        q = this.currentTime;
        p = this.currentTime %= this.data.length;
        l = parseInt(Math.min(p * this.data.fps, this.data.length * this.data.fps), 10);
        for (var m = 0, t = this.hierarchy.length; m < t; m++)
            if (a = this.hierarchy[m], i = a.animationCache, this.JITCompile && k[m][l] !== void 0) a instanceof THREE.Bone ? (a.skinMatrix = k[m][l], a.matrixAutoUpdate = !1, a.matrixWorldNeedsUpdate = !1) : (a.matrix = k[m][l], a.matrixAutoUpdate = !1, a.matrixWorldNeedsUpdate = !0);
            else {
                if (this.JITCompile) a instanceof THREE.Bone ? a.skinMatrix = a.animationCache.originalMatrix : a.matrix = a.animationCache.originalMatrix;
                for (var n = 0; n < 3; n++) {
                    b = c[n];
                    f = i.prevKey[b];
                    h = i.nextKey[b];
                    if (h.time <= q) {
                        if (p < q)
                            if (this.loop) {
                                f = this.data.hierarchy[m].keys[0];
                                for (h = this.getNextKeyWith(b, m, 1); h.time < p;) f = h, h = this.getNextKeyWith(b, m, h.index + 1)
                            } else {
                                this.stop();
                                return
                            } else {
                                do f = h, h = this.getNextKeyWith(b, m, h.index + 1); while (h.time <
                                    p)
                            }
                        i.prevKey[b] = f;
                        i.nextKey[b] = h
                    }
                    a.matrixAutoUpdate = !0;
                    a.matrixWorldNeedsUpdate = !0;
                    d = (p - f.time) / (h.time - f.time);
                    g = f[b];
                    e = h[b];
                    if (d < 0 || d > 1) console.log("THREE.Animation.update: Warning! Scale out of bounds:" + d + " on bone " + m), d = d < 0 ? 0 : 1;
                    if (b === "pos")
                        if (b = a.position, this.interpolationType === THREE.AnimationHandler.LINEAR) b.x = g[0] + (e[0] - g[0]) * d, b.y = g[1] + (e[1] - g[1]) * d, b.z = g[2] + (e[2] - g[2]) * d;
                        else {
                            if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)
                                if (this.points[0] =
                                    this.getPrevKeyWith("pos", m, f.index - 1).pos, this.points[1] = g, this.points[2] = e, this.points[3] = this.getNextKeyWith("pos", m, h.index + 1).pos, d = d * 0.33 + 0.33, g = this.interpolateCatmullRom(this.points, d), b.x = g[0], b.y = g[1], b.z = g[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) d = this.interpolateCatmullRom(this.points, d * 1.01), this.target.set(d[0], d[1], d[2]), this.target.subSelf(b), this.target.y = 0, this.target.normalize(), d = Math.atan2(this.target.x, this.target.z), a.rotation.set(0, d, 0)
                        } else if (b ===
                        "rot") THREE.Quaternion.slerp(g, e, a.quaternion, d);
                    else if (b === "scl") b = a.scale, b.x = g[0] + (e[0] - g[0]) * d, b.y = g[1] + (e[1] - g[1]) * d, b.z = g[2] + (e[2] - g[2]) * d
                }
            }
        if (this.JITCompile && k[0][l] === void 0) {
            this.hierarchy[0].update(null, !0);
            for (m = 0; m < this.hierarchy.length; m++) k[m][l] = this.hierarchy[m] instanceof THREE.Bone ? this.hierarchy[m].skinMatrix.clone() : this.hierarchy[m].matrix.clone()
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function (a, c) {
    var b = [],
        d = [],
        g, e, f, h, i, l;
    g = (a.length - 1) * c;
    e = Math.floor(g);
    g -= e;
    b[0] = e === 0 ? e : e - 1;
    b[1] = e;
    b[2] = e > a.length - 2 ? e : e + 1;
    b[3] = e > a.length - 3 ? e : e + 2;
    e = a[b[0]];
    h = a[b[1]];
    i = a[b[2]];
    l = a[b[3]];
    b = g * g;
    f = g * b;
    d[0] = this.interpolate(e[0], h[0], i[0], l[0], g, b, f);
    d[1] = this.interpolate(e[1], h[1], i[1], l[1], g, b, f);
    d[2] = this.interpolate(e[2], h[2], i[2], l[2], g, b, f);
    return d
};
THREE.Animation.prototype.interpolate = function (a, c, b, d, g, e, f) {
    a = (b - a) * 0.5;
    d = (d - c) * 0.5;
    return (2 * (c - b) + a + d) * f + (-3 * (c - b) - 2 * a - d) * e + a * g + c
};
THREE.Animation.prototype.getNextKeyWith = function (a, c, b) {
    var d = this.data.hierarchy[c].keys;
    for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? b = b < d.length - 1 ? b : d.length - 1 : b %= d.length; b < d.length; b++)
        if (d[b][a] !== void 0) return d[b];
    return this.data.hierarchy[c].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (a, c, b) {
    for (var d = this.data.hierarchy[c].keys, b = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? b > 0 ? b : 0 : b >= 0 ? b : b + d.length; b >= 0; b--)
        if (d[b][a] !== void 0) return d[b];
    return this.data.hierarchy[c].keys[d.length - 1]
};
THREE.CubeCamera = function (a, c, b, d) {
    this.heightOffset = b;
    this.position = new THREE.Vector3(0, b, 0);
    this.cameraPX = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraNX = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraPY = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraNY = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraPZ = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraNZ = new THREE.PerspectiveCamera(90, 1, a, c);
    this.cameraPX.position = this.position;
    this.cameraNX.position = this.position;
    this.cameraPY.position =
        this.position;
    this.cameraNY.position = this.position;
    this.cameraPZ.position = this.position;
    this.cameraNZ.position = this.position;
    this.cameraPX.up.set(0, -1, 0);
    this.cameraNX.up.set(0, -1, 0);
    this.cameraPY.up.set(0, 0, 1);
    this.cameraNY.up.set(0, 0, -1);
    this.cameraPZ.up.set(0, -1, 0);
    this.cameraNZ.up.set(0, -1, 0);
    this.targetPX = new THREE.Vector3(0, 0, 0);
    this.targetNX = new THREE.Vector3(0, 0, 0);
    this.targetPY = new THREE.Vector3(0, 0, 0);
    this.targetNY = new THREE.Vector3(0, 0, 0);
    this.targetPZ = new THREE.Vector3(0, 0, 0);
    this.targetNZ =
        new THREE.Vector3(0, 0, 0);
    this.renderTarget = new THREE.WebGLRenderTargetCube(d, d, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updatePosition = function (a) {
        this.position.copy(a);
        this.position.y += this.heightOffset;
        this.targetPX.copy(this.position);
        this.targetNX.copy(this.position);
        this.targetPY.copy(this.position);
        this.targetNY.copy(this.position);
        this.targetPZ.copy(this.position);
        this.targetNZ.copy(this.position);
        this.targetPX.x += 1;
        this.targetNX.x -= 1;
        this.targetPY.y +=
            1;
        this.targetNY.y -= 1;
        this.targetPZ.z += 1;
        this.targetNZ.z -= 1;
        this.cameraPX.lookAt(this.targetPX);
        this.cameraNX.lookAt(this.targetNX);
        this.cameraPY.lookAt(this.targetPY);
        this.cameraNY.lookAt(this.targetNY);
        this.cameraPZ.lookAt(this.targetPZ);
        this.cameraNZ.lookAt(this.targetNZ)
    };
    this.updateCubeMap = function (a, b) {
        var c = this.renderTarget;
        c.activeCubeFace = 0;
        a.render(b, this.cameraPX, c);
        c.activeCubeFace = 1;
        a.render(b, this.cameraNX, c);
        c.activeCubeFace = 2;
        a.render(b, this.cameraPY, c);
        c.activeCubeFace = 3;
        a.render(b,
            this.cameraNY, c);
        c.activeCubeFace = 4;
        a.render(b, this.cameraPZ, c);
        c.activeCubeFace = 5;
        a.render(b, this.cameraNZ, c)
    }
};
THREE.FirstPersonCamera = function () {
    console.warn("DEPRECATED: FirstPersonCamera() is FirstPersonControls().")
};
THREE.PathCamera = function () {
    console.warn("DEPRECATED: PathCamera() is PathControls().")
};
THREE.FlyCamera = function () {
    console.warn("DEPRECATED: FlyCamera() is FlyControls().")
};
THREE.RollCamera = function () {
    console.warn("DEPRECATED: RollCamera() is RollControls().")
};
THREE.TrackballCamera = function () {
    console.warn("DEPRECATED: TrackballCamera() is TrackballControls().")
};
THREE.CombinedCamera = function (a, c, b, d, g, e, f) {
    THREE.Camera.call(this);
    this.fov = b;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = c / 2;
    this.bottom = -c / 2;
    this.cameraO = new THREE.OrthographicCamera(a / -2, a / 2, c / 2, c / -2, e, f);
    this.cameraP = new THREE.PerspectiveCamera(b, a / c, d, g);
    this.zoom = 1;
    this.toPerspective()
};
THREE.CombinedCamera.prototype = new THREE.Camera;
THREE.CombinedCamera.prototype.constructor = THREE.CoolCamera;
THREE.CombinedCamera.prototype.toPerspective = function () {
    this.near = this.cameraP.near;
    this.far = this.cameraP.far;
    this.cameraP.fov = this.fov / this.zoom;
    this.cameraP.updateProjectionMatrix();
    this.projectionMatrix = this.cameraP.projectionMatrix;
    this.inPersepectiveMode = !0;
    this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function () {
    var a = Math.tan(this.fov / 2) * ((this.cameraP.near + this.cameraP.far) / 2),
        c = 2 * a * this.cameraP.aspect / 2;
    a /= this.zoom;
    c /= this.zoom;
    this.cameraO.left = -c;
    this.cameraO.right = c;
    this.cameraO.top = a;
    this.cameraO.bottom = -a;
    this.cameraO.updateProjectionMatrix();
    this.near = this.cameraO.near;
    this.far = this.cameraO.far;
    this.projectionMatrix = this.cameraO.projectionMatrix;
    this.inPersepectiveMode = !1;
    this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setFov = function (a) {
    this.fov = a;
    this.inPersepectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.setLens = function (a, c) {
    c || (c = 43.25);
    var b = 2 * Math.atan(c / (a * 2));
    b *= 180 / Math.PI;
    this.setFov(b);
    return b
};
THREE.CombinedCamera.prototype.setZoom = function (a) {
    this.zoom = a;
    this.inPersepectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function () {
    this.rotation.x = 0;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function () {
    this.rotation.x = 0;
    this.rotation.y = Math.PI;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function () {
    this.rotation.x = 0;
    this.rotation.y = -Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function () {
    this.rotation.x = 0;
    this.rotation.y = Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function () {
    this.rotation.x = -Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function () {
    this.rotation.x = Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.FirstPersonControls = function (a, c) {
    function b(a, b) {
        return function () {
            b.apply(a, arguments)
        }
    }
    this.object = a;
    this.target = new THREE.Vector3(0, 0, 0);
    this.domElement = c !== void 0 ? c : document;
    this.movementSpeed = 1;
    this.lookSpeed = 0.0050;
    this.noFly = !1;
    this.lookVertical = !0;
    this.autoForward = !1;
    this.activeLook = !0;
    this.heightSpeed = !1;
    this.heightCoef = 1;
    this.heightMin = 0;
    this.constrainVertical = !1;
    this.verticalMin = 0;
    this.verticalMax = Math.PI;
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor =
        0;
    this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
    this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2, this.domElement.setAttribute("tabindex", -1));
    this.onMouseDown = function (a) {
        this.domElement !== document && this.domElement.focus();
        a.preventDefault();
        a.stopPropagation();
        if (this.activeLook) switch (a.button) {
        case 0:
            this.moveForward = !0;
            break;
        case 2:
            this.moveBackward = !0
        }
        this.mouseDragOn = !0
    };
    this.onMouseUp = function (a) {
        a.preventDefault();
        a.stopPropagation();
        if (this.activeLook) switch (a.button) {
        case 0:
            this.moveForward = !1;
            break;
        case 2:
            this.moveBackward = !1
        }
        this.mouseDragOn = !1
    };
    this.onMouseMove = function (a) {
        this.domElement === document ? (this.mouseX = a.pageX - this.viewHalfX, this.mouseY = a.pageY - this.viewHalfY) : (this.mouseX = a.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = a.pageY - this.domElement.offsetTop - this.viewHalfY)
    };
    this.onKeyDown =
        function (a) {
            switch (a.keyCode) {
            case 38:
            case 87:
                this.moveForward = !0;
                break;
            case 37:
            case 65:
                this.moveLeft = !0;
                break;
            case 40:
            case 83:
                this.moveBackward = !0;
                break;
            case 39:
            case 68:
                this.moveRight = !0;
                break;
            case 82:
                this.moveUp = !0;
                break;
            case 70:
                this.moveDown = !0;
                break;
            case 81:
                this.freeze = !this.freeze
            }
    };
    this.onKeyUp = function (a) {
        switch (a.keyCode) {
        case 38:
        case 87:
            this.moveForward = !1;
            break;
        case 37:
        case 65:
            this.moveLeft = !1;
            break;
        case 40:
        case 83:
            this.moveBackward = !1;
            break;
        case 39:
        case 68:
            this.moveRight = !1;
            break;
        case 82:
            this.moveUp = !1;
            break;
        case 70:
            this.moveDown = !1
        }
    };
    this.update = function (a) {
        var b = 0;
        if (!this.freeze) {
            if (this.heightSpeed) {
                var c = THREE.Math.clamp(this.object.position.y, this.heightMin, this.heightMax) - this.heightMin;
                this.autoSpeedFactor = a * c * this.heightCoef
            } else this.autoSpeedFactor = 0;
            b = a * this.movementSpeed;
            (this.moveForward || this.autoForward && !this.moveBackward) && this.object.translateZ(-(b + this.autoSpeedFactor));
            this.moveBackward && this.object.translateZ(b);
            this.moveLeft && this.object.translateX(-b);
            this.moveRight &&
                this.object.translateX(b);
            this.moveUp && this.object.translateY(b);
            this.moveDown && this.object.translateY(-b);
            c = a * this.lookSpeed;
            this.activeLook || (c = 0);
            this.lon += this.mouseX * c;
            this.lookVertical && (this.lat -= this.mouseY * c);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            a = this.target;
            b = this.object.position;
            a.x = b.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
            a.y = b.y + 100 * Math.cos(this.phi);
            a.z = b.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
        }
        a =
            1;
        this.constrainVertical && (a = Math.PI / (this.verticalMax - this.verticalMin));
        this.lon += this.mouseX * c;
        this.lookVertical && (this.lat -= this.mouseY * c * a);
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * Math.PI / 180;
        this.theta = this.lon * Math.PI / 180;
        if (this.constrainVertical) this.phi = THREE.Math.mapLinear(this.phi, 0, Math.PI, this.verticalMin, this.verticalMax);
        a = this.target;
        b = this.object.position;
        a.x = b.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
        a.y = b.y + 100 * Math.cos(this.phi);
        a.z = b.z + 100 * Math.sin(this.phi) *
            Math.sin(this.theta);
        this.object.lookAt(a)
    };
    this.domElement.addEventListener("contextmenu", function (a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", b(this, this.onMouseMove), !1);
    this.domElement.addEventListener("mousedown", b(this, this.onMouseDown), !1);
    this.domElement.addEventListener("mouseup", b(this, this.onMouseUp), !1);
    this.domElement.addEventListener("keydown", b(this, this.onKeyDown), !1);
    this.domElement.addEventListener("keyup", b(this, this.onKeyUp), !1)
};
THREE.PathControls = function (a, c) {
    function b(a) {
        if ((a *= 2) < 1) return 0.5 * a * a;
        return -0.5 * (--a * (a - 2) - 1)
    }

    function d(a, b) {
        return function () {
            b.apply(a, arguments)
        }
    }

    function g(a, b, c, d) {
        var e = {
            name: c,
            fps: 0.6,
            length: d,
            hierarchy: []
        }, f, g = b.getControlPointsArray(),
            h = b.getLength(),
            o = g.length,
            s = 0;
        f = o - 1;
        b = {
            parent: -1,
            keys: []
        };
        b.keys[0] = {
            time: 0,
            pos: g[0],
            rot: [0, 0, 0, 1],
            scl: [1, 1, 1]
        };
        b.keys[f] = {
            time: d,
            pos: g[f],
            rot: [0, 0, 0, 1],
            scl: [1, 1, 1]
        };
        for (f = 1; f < o - 1; f++) s = d * h.chunks[f] / h.total, b.keys[f] = {
            time: s,
            pos: g[f]
        };
        e.hierarchy[0] =
            b;
        THREE.AnimationHandler.add(e);
        return new THREE.Animation(a, c, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
    }

    function e(a, b) {
        var c, d, e = new THREE.Geometry;
        for (c = 0; c < a.points.length * b; c++) d = c / (a.points.length * b), d = a.getPoint(d), e.vertices[c] = new THREE.Vertex(new THREE.Vector3(d.x, d.y, d.z));
        return e
    }
    this.object = a;
    this.domElement = c !== void 0 ? c : document;
    this.id = "PathControls" + THREE.PathControlsIdCounter++;
    this.duration = 1E4;
    this.waypoints = [];
    this.useConstantSpeed = !0;
    this.resamplingCoef = 50;
    this.debugPath =
        new THREE.Object3D;
    this.debugDummy = new THREE.Object3D;
    this.animationParent = new THREE.Object3D;
    this.lookSpeed = 0.0050;
    this.lookHorizontal = this.lookVertical = !0;
    this.verticalAngleMap = {
        srcRange: [0, 2 * Math.PI],
        dstRange: [0, 2 * Math.PI]
    };
    this.horizontalAngleMap = {
        srcRange: [0, 2 * Math.PI],
        dstRange: [0, 2 * Math.PI]
    };
    this.target = new THREE.Object3D;
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
    this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX =
        this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2, this.domElement.setAttribute("tabindex", -1));
    var f = Math.PI * 2,
        h = Math.PI / 180;
    this.update = function (a) {
        var c;
        this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed * a);
        this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed * a);
        this.lon = Math.max(0, Math.min(360, this.lon));
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * h;
        this.theta = this.lon * h;
        a = this.phi % f;
        this.phi = a >= 0 ? a : a + f;
        c = this.verticalAngleMap.srcRange;
        a = this.verticalAngleMap.dstRange;
        c = THREE.Math.mapLinear(this.phi, c[0], c[1], a[0], a[1]);
        var d = a[1] - a[0];
        this.phi = b((c - a[0]) / d) * d + a[0];
        c = this.horizontalAngleMap.srcRange;
        a = this.horizontalAngleMap.dstRange;
        c = THREE.Math.mapLinear(this.theta, c[0], c[1], a[0], a[1]);
        d = a[1] - a[0];
        this.theta = b((c - a[0]) / d) * d + a[0];
        a = this.target.position;
        a.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
        a.y = 100 * Math.cos(this.phi);
        a.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.object.lookAt(this.target.position)
    };
    this.onMouseMove =
        function (a) {
            this.domElement === document ? (this.mouseX = a.pageX - this.viewHalfX, this.mouseY = a.pageY - this.viewHalfY) : (this.mouseX = a.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = a.pageY - this.domElement.offsetTop - this.viewHalfY)
    };
    this.init = function () {
        this.spline = new THREE.Spline;
        this.spline.initFromArray(this.waypoints);
        this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
        if (this.createDebugDummy) {
            var a = new THREE.MeshLambertMaterial({
                color: 30719
            }),
                b = new THREE.MeshLambertMaterial({
                    color: 65280
                }),
                c = new THREE.CubeGeometry(10, 10, 20),
                f = new THREE.CubeGeometry(2, 2, 10);
            this.animationParent = new THREE.Mesh(c, a);
            a = new THREE.Mesh(f, b);
            a.position.set(0, 10, 0);
            this.animation = g(this.animationParent, this.spline, this.id, this.duration);
            this.animationParent.add(this.object);
            this.animationParent.add(this.target);
            this.animationParent.add(a)
        } else this.animation = g(this.animationParent, this.spline, this.id, this.duration), this.animationParent.add(this.target), this.animationParent.add(this.object); if (this.createDebugPath) {
            var a =
                this.debugPath,
                b = this.spline,
                f = e(b, 10),
                c = e(b, 10),
                h = new THREE.LineBasicMaterial({
                    color: 16711680,
                    linewidth: 3
                }),
                f = new THREE.Line(f, h),
                c = new THREE.ParticleSystem(c, new THREE.ParticleBasicMaterial({
                    color: 16755200,
                    size: 3
                }));
            f.scale.set(1, 1, 1);
            a.add(f);
            c.scale.set(1, 1, 1);
            a.add(c);
            for (var f = new THREE.SphereGeometry(1, 16, 8), h = new THREE.MeshBasicMaterial({
                    color: 65280
                }), m = 0; m < b.points.length; m++) c = new THREE.Mesh(f, h), c.position.copy(b.points[m]), a.add(c)
        }
        this.domElement.addEventListener("mousemove", d(this, this.onMouseMove), !1)
    }
};
THREE.PathControlsIdCounter = 0;
THREE.FlyControls = function (a, c) {
    function b(a, b) {
        return function () {
            b.apply(a, arguments)
        }
    }
    this.object = a;
    this.domElement = c !== void 0 ? c : document;
    c && this.domElement.setAttribute("tabindex", -1);
    this.movementSpeed = 1;
    this.rollSpeed = 0.0050;
    this.autoForward = this.dragToLook = !1;
    this.object.useQuaternion = !0;
    this.tmpQuaternion = new THREE.Quaternion;
    this.mouseStatus = 0;
    this.moveState = {
        up: 0,
        down: 0,
        left: 0,
        right: 0,
        forward: 0,
        back: 0,
        pitchUp: 0,
        pitchDown: 0,
        yawLeft: 0,
        yawRight: 0,
        rollLeft: 0,
        rollRight: 0
    };
    this.moveVector = new THREE.Vector3(0,
        0, 0);
    this.rotationVector = new THREE.Vector3(0, 0, 0);
    this.handleEvent = function (a) {
        if (typeof this[a.type] == "function") this[a.type](a)
    };
    this.keydown = function (a) {
        if (!a.altKey) {
            switch (a.keyCode) {
            case 16:
                this.movementSpeedMultiplier = 0.1;
                break;
            case 87:
                this.moveState.forward = 1;
                break;
            case 83:
                this.moveState.back = 1;
                break;
            case 65:
                this.moveState.left = 1;
                break;
            case 68:
                this.moveState.right = 1;
                break;
            case 82:
                this.moveState.up = 1;
                break;
            case 70:
                this.moveState.down = 1;
                break;
            case 38:
                this.moveState.pitchUp = 1;
                break;
            case 40:
                this.moveState.pitchDown =
                    1;
                break;
            case 37:
                this.moveState.yawLeft = 1;
                break;
            case 39:
                this.moveState.yawRight = 1;
                break;
            case 81:
                this.moveState.rollLeft = 1;
                break;
            case 69:
                this.moveState.rollRight = 1
            }
            this.updateMovementVector();
            this.updateRotationVector()
        }
    };
    this.keyup = function (a) {
        switch (a.keyCode) {
        case 16:
            this.movementSpeedMultiplier = 1;
            break;
        case 87:
            this.moveState.forward = 0;
            break;
        case 83:
            this.moveState.back = 0;
            break;
        case 65:
            this.moveState.left = 0;
            break;
        case 68:
            this.moveState.right = 0;
            break;
        case 82:
            this.moveState.up = 0;
            break;
        case 70:
            this.moveState.down =
                0;
            break;
        case 38:
            this.moveState.pitchUp = 0;
            break;
        case 40:
            this.moveState.pitchDown = 0;
            break;
        case 37:
            this.moveState.yawLeft = 0;
            break;
        case 39:
            this.moveState.yawRight = 0;
            break;
        case 81:
            this.moveState.rollLeft = 0;
            break;
        case 69:
            this.moveState.rollRight = 0
        }
        this.updateMovementVector();
        this.updateRotationVector()
    };
    this.mousedown = function (a) {
        this.domElement !== document && this.domElement.focus();
        a.preventDefault();
        a.stopPropagation();
        if (this.dragToLook) this.mouseStatus++;
        else switch (a.button) {
        case 0:
            this.object.moveForward = !0;
            break;
        case 2:
            this.object.moveBackward = !0
        }
    };
    this.mousemove = function (a) {
        if (!this.dragToLook || this.mouseStatus > 0) {
            var b = this.getContainerDimensions(),
                c = b.size[0] / 2,
                f = b.size[1] / 2;
            this.moveState.yawLeft = -(a.pageX - b.offset[0] - c) / c;
            this.moveState.pitchDown = (a.pageY - b.offset[1] - f) / f;
            this.updateRotationVector()
        }
    };
    this.mouseup = function (a) {
        a.preventDefault();
        a.stopPropagation();
        if (this.dragToLook) this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0;
        else switch (a.button) {
        case 0:
            this.moveForward = !1;
            break;
        case 2:
            this.moveBackward = !1
        }
        this.updateRotationVector()
    };
    this.update = function (a) {
        var b = a * this.movementSpeed;
        a *= this.rollSpeed;
        this.object.translateX(this.moveVector.x * b);
        this.object.translateY(this.moveVector.y * b);
        this.object.translateZ(this.moveVector.z * b);
        this.tmpQuaternion.set(this.rotationVector.x * a, this.rotationVector.y * a, this.rotationVector.z * a, 1).normalize();
        this.object.quaternion.multiplySelf(this.tmpQuaternion);
        this.object.matrix.setPosition(this.object.position);
        this.object.matrix.setRotationFromQuaternion(this.object.quaternion);
        this.object.matrixWorldNeedsUpdate = !0
    };
    this.updateMovementVector = function () {
        var a = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
        this.moveVector.x = -this.moveState.left + this.moveState.right;
        this.moveVector.y = -this.moveState.down + this.moveState.up;
        this.moveVector.z = -a + this.moveState.back
    };
    this.updateRotationVector = function () {
        this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
        this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
        this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
    };
    this.getContainerDimensions = function () {
        return this.domElement != document ? {
            size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
            offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
        } : {
            size: [window.innerWidth, window.innerHeight],
            offset: [0, 0]
        }
    };
    this.domElement.addEventListener("mousemove", b(this, this.mousemove), !1);
    this.domElement.addEventListener("mousedown", b(this, this.mousedown), !1);
    this.domElement.addEventListener("mouseup", b(this,
        this.mouseup), !1);
    this.domElement.addEventListener("keydown", b(this, this.keydown), !1);
    this.domElement.addEventListener("keyup", b(this, this.keyup), !1);
    this.updateMovementVector();
    this.updateRotationVector()
};
THREE.RollControls = function (a, c) {
    this.object = a;
    this.domElement = c !== void 0 ? c : document;
    this.mouseLook = !0;
    this.autoForward = !1;
    this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
    this.constrainVertical = [-0.9, 0.9];
    this.object.matrixAutoUpdate = !1;
    this.forward = new THREE.Vector3(0, 0, 1);
    this.roll = 0;
    var b = new THREE.Vector3,
        d = new THREE.Vector3,
        g = new THREE.Vector3,
        e = new THREE.Matrix4,
        f = !1,
        h = 1,
        i = 0,
        l = 0,
        k = 0,
        p = 0,
        q = 0,
        m = window.innerWidth / 2,
        t = window.innerHeight / 2;
    this.update = function (a) {
        if (this.mouseLook) {
            var c = a * this.lookSpeed;
            this.rotateHorizontally(c * p);
            this.rotateVertically(c * q)
        }
        c = a * this.movementSpeed;
        this.object.translateZ(-c * (i > 0 || this.autoForward && !(i < 0) ? 1 : i));
        this.object.translateX(c * l);
        this.object.translateY(c * k);
        f && (this.roll += this.rollSpeed * a * h);
        if (this.forward.y > this.constrainVertical[1]) this.forward.y = this.constrainVertical[1], this.forward.normalize();
        else if (this.forward.y < this.constrainVertical[0]) this.forward.y = this.constrainVertical[0], this.forward.normalize();
        g.copy(this.forward);
        d.set(0, 1, 0);
        b.cross(d,
            g).normalize();
        d.cross(g, b).normalize();
        this.object.matrix.n11 = b.x;
        this.object.matrix.n12 = d.x;
        this.object.matrix.n13 = g.x;
        this.object.matrix.n21 = b.y;
        this.object.matrix.n22 = d.y;
        this.object.matrix.n23 = g.y;
        this.object.matrix.n31 = b.z;
        this.object.matrix.n32 = d.z;
        this.object.matrix.n33 = g.z;
        e.identity();
        e.n11 = Math.cos(this.roll);
        e.n12 = -Math.sin(this.roll);
        e.n21 = Math.sin(this.roll);
        e.n22 = Math.cos(this.roll);
        this.object.matrix.multiplySelf(e);
        this.object.matrixWorldNeedsUpdate = !0;
        this.object.matrix.n14 = this.object.position.x;
        this.object.matrix.n24 = this.object.position.y;
        this.object.matrix.n34 = this.object.position.z
    };
    this.translateX = function (a) {
        this.object.position.x += this.object.matrix.n11 * a;
        this.object.position.y += this.object.matrix.n21 * a;
        this.object.position.z += this.object.matrix.n31 * a
    };
    this.translateY = function (a) {
        this.object.position.x += this.object.matrix.n12 * a;
        this.object.position.y += this.object.matrix.n22 * a;
        this.object.position.z += this.object.matrix.n32 * a
    };
    this.translateZ = function (a) {
        this.object.position.x -= this.object.matrix.n13 *
            a;
        this.object.position.y -= this.object.matrix.n23 * a;
        this.object.position.z -= this.object.matrix.n33 * a
    };
    this.rotateHorizontally = function (a) {
        b.set(this.object.matrix.n11, this.object.matrix.n21, this.object.matrix.n31);
        b.multiplyScalar(a);
        this.forward.subSelf(b);
        this.forward.normalize()
    };
    this.rotateVertically = function (a) {
        d.set(this.object.matrix.n12, this.object.matrix.n22, this.object.matrix.n32);
        d.multiplyScalar(a);
        this.forward.addSelf(d);
        this.forward.normalize()
    };
    this.domElement.addEventListener("contextmenu",
        function (a) {
            a.preventDefault()
        }, !1);
    this.domElement.addEventListener("mousemove", function (a) {
        p = (a.clientX - m) / window.innerWidth;
        q = (a.clientY - t) / window.innerHeight
    }, !1);
    this.domElement.addEventListener("mousedown", function (a) {
        a.preventDefault();
        a.stopPropagation();
        switch (a.button) {
        case 0:
            i = 1;
            break;
        case 2:
            i = -1
        }
    }, !1);
    this.domElement.addEventListener("mouseup", function (a) {
        a.preventDefault();
        a.stopPropagation();
        switch (a.button) {
        case 0:
            i = 0;
            break;
        case 2:
            i = 0
        }
    }, !1);
    this.domElement.addEventListener("keydown",
        function (a) {
            switch (a.keyCode) {
            case 38:
            case 87:
                i = 1;
                break;
            case 37:
            case 65:
                l = -1;
                break;
            case 40:
            case 83:
                i = -1;
                break;
            case 39:
            case 68:
                l = 1;
                break;
            case 81:
                f = !0;
                h = 1;
                break;
            case 69:
                f = !0;
                h = -1;
                break;
            case 82:
                k = 1;
                break;
            case 70:
                k = -1
            }
        }, !1);
    this.domElement.addEventListener("keyup", function (a) {
        switch (a.keyCode) {
        case 38:
        case 87:
            i = 0;
            break;
        case 37:
        case 65:
            l = 0;
            break;
        case 40:
        case 83:
            i = 0;
            break;
        case 39:
        case 68:
            l = 0;
            break;
        case 81:
            f = !1;
            break;
        case 69:
            f = !1;
            break;
        case 82:
            k = 0;
            break;
        case 70:
            k = 0
        }
    }, !1)
};

THREE.TrackballControls = function (a, c) {
    var b = this,
        d = {
            NONE: -1,
            ROTATE: 0,
            ZOOM: 1,
            PAN: 2
        };
    this.object = a;
    this.domElement = c !== void 0 ? c : document;
    this.enabled = !0;
    this.screen = {
        width: window.innerWidth,
        height: window.innerHeight,
        offsetLeft: 0,
        offsetTop: 0
    };
    this.radius = (this.screen.width + this.screen.height) / 4;
    this.rotateSpeed = 1;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;
    this.staticMoving = this.noPan = this.noZoom = !1;
    this.dynamicDampingFactor = 0.2;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.keys = [65, 83, 68];
    this.target =
        new THREE.Vector3(0, 0, 0);
    this.isSparkletime = false;
    var g = !1,
        e = d.NONE,
        f = new THREE.Vector3,
        h = new THREE.Vector3,
        i = new THREE.Vector3,
        l = new THREE.Vector2,
        k = new THREE.Vector2,
        p = new THREE.Vector2,
        q = new THREE.Vector2;
    this.handleEvent = function (a) {
        if (typeof this[a.type] == "function") this[a.type](a)
    };
    this.getMouseOnScreen = function (a, c) {
        return new THREE.Vector2((a - b.screen.offsetLeft) / b.radius * 0.5, (c - b.screen.offsetTop) / b.radius * 0.5)
    };
    this.getMouseProjectionOnBall = function (a, c) {
        var d = new THREE.Vector3((a - b.screen.width * 0.5 - b.screen.offsetLeft) /
            b.radius, (b.screen.height * 0.5 + b.screen.offsetTop - c) / b.radius, 0),
            e = d.length();
        e > 1 ? d.normalize() : d.z = Math.sqrt(1 - e * e);
        f.copy(b.object.position).subSelf(b.target);
        e = b.object.up.clone().setLength(d.y);
        e.addSelf(b.object.up.clone().crossSelf(f).setLength(d.x));
        e.addSelf(f.setLength(d.z));
        return e
    };
    this.rotateCamera = function () {
        var a = Math.acos(h.dot(i) / h.length() / i.length());
        if (a) {
            var c = (new THREE.Vector3).cross(h, i).normalize(),
                d = new THREE.Quaternion;
            a *= b.rotateSpeed;
            d.setFromAxisAngle(c, -a);
            d.multiplyVector3(f);
            d.multiplyVector3(b.object.up);
            d.multiplyVector3(i);
            b.staticMoving ? h = i : (d.setFromAxisAngle(c, a * (b.dynamicDampingFactor - 1)), d.multiplyVector3(h))
        }
    };
    this.zoomCamera = function () {
        var a = 1 + (k.y - l.y) * b.zoomSpeed;
        a !== 1 && a > 0 && (f.multiplyScalar(a), b.staticMoving ? l = k : l.y += (k.y - l.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function () {
        var a = q.clone().subSelf(p);
        if (a.lengthSq()) {
            a.multiplyScalar(f.length() * b.panSpeed);
            var c = f.clone().crossSelf(b.object.up).setLength(a.x);
            c.addSelf(b.object.up.clone().setLength(a.y));
            b.object.position.addSelf(c);
            b.target.addSelf(c);
            b.staticMoving ? p = q : p.addSelf(a.sub(q, p).multiplyScalar(b.dynamicDampingFactor))
        }
    };
    this.checkDistances = function () {
        if (!b.noZoom || !b.noPan) b.object.position.lengthSq() > b.maxDistance * b.maxDistance && b.object.position.setLength(b.maxDistance), f.lengthSq() < b.minDistance * b.minDistance && b.object.position.add(b.target, f.setLength(b.minDistance))
    };
    this.update = function () {
        f.copy(b.object.position).subSelf(this.target);
        b.rotateCamera();
        b.noZoom || b.zoomCamera();
        b.noPan ||
            b.panCamera();
        b.object.position.add(b.target, f);

        if (!this.isSparkletime) {
            /// THIS IS SUCH A HACK //
            // trying to keep cam above terrain, 
            // and make sure it doesn't jump around too fast (that kills it)
            if (b.object.position.y < 325) {
                b.object.position.y = 325;
                this.rotateSpeed = .05;
            } else {
                this.rotateSpeed = .25;
            }
            /// THIS IS SUCH A HACK //
        }

        // during sparkeltime, of course we want full movement

        b.checkDistances();
        b.object.lookAt(b.target)
    };
    this.domElement.addEventListener("contextmenu", function (a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function (a) {
        b.enabled && (g && (h = i = b.getMouseProjectionOnBall(a.clientX, a.clientY), l = k = b.getMouseOnScreen(a.clientX, a.clientY), p = q = b.getMouseOnScreen(a.clientX, a.clientY), g = !1), e !== d.NONE && (e === d.ROTATE ? i = b.getMouseProjectionOnBall(a.clientX, a.clientY) : e === d.ZOOM && !b.noZoom ? k = b.getMouseOnScreen(a.clientX,
            a.clientY) : e === d.PAN && !b.noPan && (q = b.getMouseOnScreen(a.clientX, a.clientY))))
    }, !1);
    this.domElement.addEventListener("mousedown", function (a) {
        if (b.enabled && (a.preventDefault(), a.stopPropagation(), e === d.NONE)) e = a.button, e === d.ROTATE ? h = i = b.getMouseProjectionOnBall(a.clientX, a.clientY) : e === d.ZOOM && !b.noZoom ? l = k = b.getMouseOnScreen(a.clientX, a.clientY) : this.noPan || (p = q = b.getMouseOnScreen(a.clientX, a.clientY))
    }, !1);
    this.domElement.addEventListener("mouseup", function (a) {
        if (b.enabled) a.preventDefault(), a.stopPropagation(),
        e = d.NONE
    }, !1);
    window.addEventListener("keydown", function (a) {
        if (b.enabled && e === d.NONE) {
            if (a.keyCode === b.keys[d.ROTATE]) e = d.ROTATE;
            else if (a.keyCode === b.keys[d.ZOOM] && !b.noZoom) e = d.ZOOM;
            else if (a.keyCode === b.keys[d.PAN] && !b.noPan) e = d.PAN;
            e !== d.NONE && (g = !0)
        }
    }, !1);
    window.addEventListener("keyup", function () {
        if (b.enabled && e !== d.NONE) e = d.NONE
    }, !1)
};
THREE.CubeGeometry = function (a, c, b, d, g, e, f, h) {
    function i(a, b, c, f, h, i, k, m) {
        var n, o = d || 1,
            p = g || 1,
            q = h / 2,
            s = i / 2,
            t = l.vertices.length;
        if (a === "x" && b === "y" || a === "y" && b === "x") n = "z";
        else if (a === "x" && b === "z" || a === "z" && b === "x") n = "y", p = e || 1;
        else if (a === "z" && b === "y" || a === "y" && b === "z") n = "x", o = e || 1;
        var r = o + 1,
            u = p + 1,
            I = h / o,
            O = i / p,
            M = new THREE.Vector3;
        M[n] = k > 0 ? 1 : -1;
        for (h = 0; h < u; h++)
            for (i = 0; i < r; i++) {
                var j = new THREE.Vector3;
                j[a] = (i * I - q) * c;
                j[b] = (h * O - s) * f;
                j[n] = k;
                l.vertices.push(new THREE.Vertex(j))
            }
        for (h = 0; h < p; h++)
            for (i = 0; i < o; i++) a =
                new THREE.Face4(i + r * h + t, i + r * (h + 1) + t, i + 1 + r * (h + 1) + t, i + 1 + r * h + t), a.normal.copy(M), a.vertexNormals.push(M.clone(), M.clone(), M.clone(), M.clone()), a.materialIndex = m, l.faces.push(a), l.faceVertexUvs[0].push([new THREE.UV(i / o, h / p), new THREE.UV(i / o, (h + 1) / p), new THREE.UV((i + 1) / o, (h + 1) / p), new THREE.UV((i + 1) / o, h / p)])
    }
    THREE.Geometry.call(this);
    var l = this,
        k = a / 2,
        p = c / 2,
        q = b / 2,
        m, t, n, o, s, u;
    if (f !== void 0) {
        if (f instanceof Array) this.materials = f;
        else {
            this.materials = [];
            for (m = 0; m < 6; m++) this.materials.push(f)
        }
        m = 0;
        o = 1;
        t = 2;
        s =
            3;
        n = 4;
        u = 5
    } else this.materials = [];
    this.sides = {
        px: !0,
        nx: !0,
        py: !0,
        ny: !0,
        pz: !0,
        nz: !0
    };
    if (h != void 0)
        for (var r in h) this.sides[r] != void 0 && (this.sides[r] = h[r]);
    this.sides.px && i("z", "y", -1, -1, b, c, k, m);
    this.sides.nx && i("z", "y", 1, -1, b, c, -k, o);
    this.sides.py && i("x", "z", 1, 1, a, b, p, t);
    this.sides.ny && i("x", "z", 1, -1, a, b, -p, s);
    this.sides.pz && i("x", "y", 1, -1, a, c, q, n);
    this.sides.nz && i("x", "y", -1, -1, a, c, -q, u);
    this.computeCentroids();
    this.mergeVertices()
};
THREE.CubeGeometry.prototype = new THREE.Geometry;
THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry;
THREE.CylinderGeometry = function (a, c, b, d, g, e) {
    THREE.Geometry.call(this);
    var a = a != null ? a : 20,
        c = c != null ? c : 20,
        b = b || 100,
        f = b / 2,
        d = d || 8,
        g = g || 1,
        h, i, l = [],
        k = [];
    for (i = 0; i <= g; i++) {
        var p = [],
            q = [],
            m = i / g,
            t = m * (c - a) + a;
        for (h = 0; h <= d; h++) {
            var n = h / d;
            this.vertices.push(new THREE.Vertex(new THREE.Vector3(t * Math.sin(n * Math.PI * 2), -m * b + f, t * Math.cos(n * Math.PI * 2))));
            p.push(this.vertices.length - 1);
            q.push(new THREE.UV(n, m))
        }
        l.push(p);
        k.push(q)
    }
    for (i = 0; i < g; i++)
        for (h = 0; h < d; h++) {
            var b = l[i][h],
                p = l[i + 1][h],
                q = l[i + 1][h + 1],
                m = l[i][h + 1],
                t =
                    this.vertices[b].position.clone().setY(0).normalize(),
                n = this.vertices[p].position.clone().setY(0).normalize(),
                o = this.vertices[q].position.clone().setY(0).normalize(),
                s = this.vertices[m].position.clone().setY(0).normalize(),
                u = k[i][h].clone(),
                r = k[i + 1][h].clone(),
                z = k[i + 1][h + 1].clone(),
                E = k[i][h + 1].clone();
            this.faces.push(new THREE.Face4(b, p, q, m, [t, n, o, s]));
            this.faceVertexUvs[0].push([u, r, z, E])
        }
    if (!e && a > 0) {
        this.vertices.push(new THREE.Vertex(new THREE.Vector3(0, f, 0)));
        for (h = 0; h < d; h++) b = l[0][h], p = l[0][h +
            1
        ], q = this.vertices.length - 1, t = new THREE.Vector3(0, 1, 0), n = new THREE.Vector3(0, 1, 0), o = new THREE.Vector3(0, 1, 0), u = k[0][h].clone(), r = k[0][h + 1].clone(), z = new THREE.UV(r.u, 0), this.faces.push(new THREE.Face3(b, p, q, [t, n, o])), this.faceVertexUvs[0].push([u, r, z])
    }
    if (!e && c > 0) {
        this.vertices.push(new THREE.Vertex(new THREE.Vector3(0, -f, 0)));
        for (h = 0; h < d; h++) b = l[i][h + 1], p = l[i][h], q = this.vertices.length - 1, t = new THREE.Vector3(0, -1, 0), n = new THREE.Vector3(0, -1, 0), o = new THREE.Vector3(0, -1, 0), u = k[i][h + 1].clone(), r = k[i][h].clone(),
        z = new THREE.UV(r.u, 1), this.faces.push(new THREE.Face3(b, p, q, [t, n, o])), this.faceVertexUvs[0].push([u, r, z])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = new THREE.Geometry;
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.ExtrudeGeometry = function (a, c) {
    if (typeof a !== "undefined") {
        THREE.Geometry.call(this);
        var a = a instanceof Array ? a : [a],
            b, d = a.length,
            g;
        this.shapebb = a[d - 1].getBoundingBox();
        for (b = 0; b < d; b++) g = a[b], this.addShape(g, c);
        this.computeCentroids();
        this.computeFaceNormals()
    }
};
THREE.ExtrudeGeometry.prototype = new THREE.Geometry;
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShape = function (a, c) {
    function b(a, b, c) {
        b || console.log("die");
        return b.clone().multiplyScalar(c).addSelf(a)
    }

    function d(a, b, c) {
        var d = THREE.ExtrudeGeometry.__v1,
            e = THREE.ExtrudeGeometry.__v2,
            f = THREE.ExtrudeGeometry.__v3,
            g = THREE.ExtrudeGeometry.__v4,
            h = THREE.ExtrudeGeometry.__v5,
            i = THREE.ExtrudeGeometry.__v6;
        d.set(a.x - b.x, a.y - b.y);
        e.set(a.x - c.x, a.y - c.y);
        d = d.normalize();
        e = e.normalize();
        f.set(-d.y, d.x);
        g.set(e.y, -e.x);
        h.copy(a).addSelf(f);
        i.copy(a).addSelf(g);
        if (h.equals(i)) return g.clone();
        h.copy(b).addSelf(f);
        i.copy(c).addSelf(g);
        f = d.dot(g);
        g = i.subSelf(h).dot(g);
        f === 0 && (console.log("Either infinite or no solutions!"), g === 0 ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
        g /= f;
        if (g < 0) return b = Math.atan2(b.y - a.y, b.x - a.x), a = Math.atan2(c.y - a.y, c.x - a.x), b > a && (a += Math.PI * 2), a = (b + a) / 2, new THREE.Vector2(-Math.cos(a), -Math.sin(a));
        return d.multiplyScalar(g).addSelf(h).subSelf(a).clone()
    }

    function g(a) {
        for (B = a.length; --B >= 0;) {
            j = B;
            P = B - 1;
            P < 0 && (P = a.length - 1);
            for (var b =
                0, c = m + k * 2, b = 0; b < c; b++) {
                var d = ea * b,
                    e = ea * (b + 1),
                    f = ha + j + d,
                    g = ha + j + e,
                    l = f,
                    d = ha + P + d,
                    e = ha + P + e,
                    n = g;
                l += F;
                d += F;
                e += F;
                n += F;
                C.faces.push(new THREE.Face4(l, d, e, n, null, null, z));
                z && (l = b / c, d = (b + 1) / c, e = h + i * 2, f = (C.vertices[f].position.z + i) / e, g = (C.vertices[g].position.z + i) / e, C.faceVertexUvs[0].push([new THREE.UV(f, l), new THREE.UV(g, l), new THREE.UV(g, d), new THREE.UV(f, d)]))
            }
        }
    }

    function e(a, b, c) {
        C.vertices.push(new THREE.Vertex(new THREE.Vector3(a, b, c)))
    }

    function f(a, b, c) {
        a += F;
        b += F;
        c += F;
        C.faces.push(new THREE.Face3(a, b, c,
            null, null, r));
        if (r) {
            var d = E.maxY,
                e = E.maxX,
                f = C.vertices[b].position.x,
                b = C.vertices[b].position.y,
                g = C.vertices[c].position.x,
                c = C.vertices[c].position.y;
            C.faceVertexUvs[0].push([new THREE.UV(C.vertices[a].position.x / e, C.vertices[a].position.y / d), new THREE.UV(f / e, b / d), new THREE.UV(g / e, c / d)])
        }
    }
    var h = c.amount !== void 0 ? c.amount : 100,
        i = c.bevelThickness !== void 0 ? c.bevelThickness : 6,
        l = c.bevelSize !== void 0 ? c.bevelSize : i - 2,
        k = c.bevelSegments !== void 0 ? c.bevelSegments : 3,
        p = c.bevelEnabled !== void 0 ? c.bevelEnabled : !0,
        q = c.curveSegments !== void 0 ? c.curveSegments : 12,
        m = c.steps !== void 0 ? c.steps : 1,
        t = c.bendPath,
        n = c.extrudePath,
        o, s = !1,
        u = c.useSpacedPoints !== void 0 ? c.useSpacedPoints : !1,
        r = c.material,
        z = c.extrudeMaterial,
        E = this.shapebb;
    if (n) o = n.getPoints(q), m = o.length, s = !0, p = !1;
    p || (l = i = k = 0);
    var G, v, w, C = this,
        F = this.vertices.length;
    t && a.addWrapPath(t);
    q = u ? a.extractAllSpacedPoints(q) : a.extractAllPoints(q);
    t = q.shape;
    q = q.holes;
    if (n = !THREE.Shape.Utils.isClockWise(t)) {
        t = t.reverse();
        v = 0;
        for (w = q.length; v < w; v++) G = q[v], THREE.Shape.Utils.isClockWise(G) &&
            (q[v] = G.reverse());
        n = !1
    }
    n = THREE.Shape.Utils.triangulateShape(t, q);
    u = t;
    v = 0;
    for (w = q.length; v < w; v++) G = q[v], t = t.concat(G);
    var B, L, J, W, X, T, ea = t.length,
        ba = n.length,
        x = [];
    B = 0;
    L = u.length;
    j = L - 1;
    for (P = B + 1; B < L; B++, j++, P++) j === L && (j = 0), P === L && (P = 0), x[B] = d(u[B], u[j], u[P]);
    var I = [],
        O, M = x.concat();
    v = 0;
    for (w = q.length; v < w; v++) {
        G = q[v];
        O = [];
        B = 0;
        L = G.length;
        j = L - 1;
        for (P = B + 1; B < L; B++, j++, P++) j === L && (j = 0), P === L && (P = 0), O[B] = d(G[B], G[j], G[P]);
        I.push(O);
        M = M.concat(O)
    }
    for (J = 0; J < k; J++) {
        W = J / k;
        X = i * (1 - W);
        W = l * Math.sin(W * Math.PI / 2);
        B = 0;
        for (L = u.length; B < L; B++) T = b(u[B], x[B], W), e(T.x, T.y, -X);
        v = 0;
        for (w = q.length; v < w; v++) {
            G = q[v];
            O = I[v];
            B = 0;
            for (L = G.length; B < L; B++) T = b(G[B], O[B], W), e(T.x, T.y, -X)
        }
    }
    W = l;
    for (B = 0; B < ea; B++) T = p ? b(t[B], M[B], W) : t[B], s ? e(T.x, T.y + o[0].y, o[0].x) : e(T.x, T.y, 0);
    for (J = 1; J <= m; J++)
        for (B = 0; B < ea; B++) T = p ? b(t[B], M[B], W) : t[B], s ? e(T.x, T.y + o[J - 1].y, o[J - 1].x) : e(T.x, T.y, h / m * J);
    for (J = k - 1; J >= 0; J--) {
        W = J / k;
        X = i * (1 - W);
        W = l * Math.sin(W * Math.PI / 2);
        B = 0;
        for (L = u.length; B < L; B++) T = b(u[B], x[B], W), e(T.x, T.y, h + X);
        v = 0;
        for (w = q.length; v < w; v++) {
            G =
                q[v];
            O = I[v];
            B = 0;
            for (L = G.length; B < L; B++) T = b(G[B], O[B], W), s ? e(T.x, T.y + o[m - 1].y, o[m - 1].x + X) : e(T.x, T.y, h + X)
        }
    }
    if (p) {
        p = ea * 0;
        for (B = 0; B < ba; B++) l = n[B], f(l[2] + p, l[1] + p, l[0] + p);
        p = ea * (m + k * 2);
        for (B = 0; B < ba; B++) l = n[B], f(l[0] + p, l[1] + p, l[2] + p)
    } else {
        for (B = 0; B < ba; B++) l = n[B], f(l[2], l[1], l[0]);
        for (B = 0; B < ba; B++) l = n[B], f(l[0] + ea * m, l[1] + ea * m, l[2] + ea * m)
    }
    var j, P, ha = 0;
    g(u);
    ha += u.length;
    v = 0;
    for (w = q.length; v < w; v++) G = q[v], g(G), ha += G.length
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.IcosahedronGeometry = function (a) {
    function c(a, b, c) {
        var d = Math.sqrt(a * a + b * b + c * c);
        return g.vertices.push(new THREE.Vertex(new THREE.Vector3(a / d, b / d, c / d))) - 1
    }

    function b(a, b, c, d) {
        d.faces.push(new THREE.Face3(a, b, c))
    }

    function d(a, b) {
        var d = g.vertices[a].position,
            e = g.vertices[b].position;
        return c((d.x + e.x) / 2, (d.y + e.y) / 2, (d.z + e.z) / 2)
    }
    var g = this,
        e = new THREE.Geometry;
    this.subdivisions = a || 0;
    THREE.Geometry.call(this);
    a = (1 + Math.sqrt(5)) / 2;
    c(-1, a, 0);
    c(1, a, 0);
    c(-1, -a, 0);
    c(1, -a, 0);
    c(0, -1, a);
    c(0, 1, a);
    c(0, -1, -a);
    c(0, 1, -a);
    c(a, 0, -1);
    c(a, 0, 1);
    c(-a, 0, -1);
    c(-a, 0, 1);
    b(0, 11, 5, e);
    b(0, 5, 1, e);
    b(0, 1, 7, e);
    b(0, 7, 10, e);
    b(0, 10, 11, e);
    b(1, 5, 9, e);
    b(5, 11, 4, e);
    b(11, 10, 2, e);
    b(10, 7, 6, e);
    b(7, 1, 8, e);
    b(3, 9, 4, e);
    b(3, 4, 2, e);
    b(3, 2, 6, e);
    b(3, 6, 8, e);
    b(3, 8, 9, e);
    b(4, 9, 5, e);
    b(2, 4, 11, e);
    b(6, 2, 10, e);
    b(8, 6, 7, e);
    b(9, 8, 1, e);
    for (var f = 0; f < this.subdivisions; f++) {
        var a = new THREE.Geometry,
            h;
        for (h in e.faces) {
            var i = d(e.faces[h].a, e.faces[h].b),
                l = d(e.faces[h].b, e.faces[h].c),
                k = d(e.faces[h].c, e.faces[h].a);
            b(e.faces[h].a, i, k, a);
            b(e.faces[h].b, l,
                i, a);
            b(e.faces[h].c, k, l, a);
            b(i, l, k, a)
        }
        e.faces = a.faces
    }
    g.faces = e.faces;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.IcosahedronGeometry.prototype = new THREE.Geometry;
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.LatheGeometry = function (a, c, b) {
    THREE.Geometry.call(this);
    this.steps = c || 12;
    this.angle = b || 2 * Math.PI;
    for (var c = this.angle / this.steps, b = [], d = [], g = [], e = [], f = (new THREE.Matrix4).setRotationZ(c), h = 0; h < a.length; h++) this.vertices.push(new THREE.Vertex(a[h])), b[h] = a[h].clone(), d[h] = this.vertices.length - 1;
    for (var i = 0; i <= this.angle + 0.0010; i += c) {
        for (h = 0; h < b.length; h++) i < this.angle ? (b[h] = f.multiplyVector3(b[h].clone()), this.vertices.push(new THREE.Vertex(b[h])), g[h] = this.vertices.length - 1) : g = e;
        i == 0 && (e = d);
        for (h = 0; h < d.length - 1; h++) this.faces.push(new THREE.Face4(g[h], g[h + 1], d[h + 1], d[h])), this.faceVertexUvs[0].push([new THREE.UV(1 - i / this.angle, h / a.length), new THREE.UV(1 - i / this.angle, (h + 1) / a.length), new THREE.UV(1 - (i - c) / this.angle, (h + 1) / a.length), new THREE.UV(1 - (i - c) / this.angle, h / a.length)]);
        d = g;
        g = []
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = new THREE.Geometry;
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.OctahedronGeometry = function (a, c) {
    function b(b) {
        var c = b.clone().normalize(),
            c = new THREE.Vertex(c.clone().multiplyScalar(a));
        c.index = f.vertices.push(c) - 1;
        c.uv = new THREE.UV(Math.atan2(b.z, -b.x) / 2 / Math.PI + 0.5, Math.atan2(-b.y, Math.sqrt(b.x * b.x + b.z * b.z)) / Math.PI + 0.5);
        return c
    }

    function d(a, b, c, h) {
        h < 1 ? (h = new THREE.Face3(a.index, b.index, c.index, [a.position, b.position, c.position]), h.centroid.addSelf(a.position).addSelf(b.position).addSelf(c.position).divideScalar(3), h.normal = h.centroid.clone().normalize(),
            f.faces.push(h), h = Math.atan2(h.centroid.z, -h.centroid.x), f.faceVertexUvs[0].push([e(a.uv, a.position, h), e(b.uv, b.position, h), e(c.uv, c.position, h)])) : (h -= 1, d(a, g(a, b), g(a, c), h), d(g(a, b), b, g(b, c), h), d(g(a, c), g(b, c), c, h), d(g(a, b), g(b, c), g(a, c), h))
    }

    function g(a, c) {
        h[a.index] || (h[a.index] = []);
        h[c.index] || (h[c.index] = []);
        var d = h[a.index][c.index];
        d === void 0 && (h[a.index][c.index] = h[c.index][a.index] = d = b((new THREE.Vector3).add(a.position, c.position).divideScalar(2)));
        return d
    }

    function e(a, b, c) {
        c < 0 && a.u ===
            1 && (a = new THREE.UV(a.u - 1, a.v));
        b.x === 0 && b.z === 0 && (a = new THREE.UV(c / 2 / Math.PI + 0.5, a.v));
        return a
    }
    THREE.Geometry.call(this);
    var c = c || 0,
        f = this;
    b(new THREE.Vector3(1, 0, 0));
    b(new THREE.Vector3(-1, 0, 0));
    b(new THREE.Vector3(0, 1, 0));
    b(new THREE.Vector3(0, -1, 0));
    b(new THREE.Vector3(0, 0, 1));
    b(new THREE.Vector3(0, 0, -1));
    var h = [],
        i = this.vertices;
    d(i[0], i[2], i[4], c);
    d(i[0], i[4], i[3], c);
    d(i[0], i[3], i[5], c);
    d(i[0], i[5], i[2], c);
    d(i[1], i[2], i[5], c);
    d(i[1], i[5], i[3], c);
    d(i[1], i[3], i[4], c);
    d(i[1], i[4], i[2], c);
    this.boundingSphere = {
        radius: a
    }
};
THREE.OctahedronGeometry.prototype = new THREE.Geometry;
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;
THREE.PlaneGeometry = function (a, c, b, d) {
    THREE.Geometry.call(this);
    for (var g = a / 2, e = c / 2, b = b || 1, d = d || 1, f = b + 1, h = d + 1, i = a / b, l = c / d, k = new THREE.Vector3(0, 0, 1), a = 0; a < h; a++)
        for (c = 0; c < f; c++) this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * i - g, -(a * l - e), 0)));
    for (a = 0; a < d; a++)
        for (c = 0; c < b; c++) g = new THREE.Face4(c + f * a, c + f * (a + 1), c + 1 + f * (a + 1), c + 1 + f * a), g.normal.copy(k), g.vertexNormals.push(k.clone(), k.clone(), k.clone(), k.clone()), this.faces.push(g), this.faceVertexUvs[0].push([new THREE.UV(c / b, a / d), new THREE.UV(c /
            b, (a + 1) / d), new THREE.UV((c + 1) / b, (a + 1) / d), new THREE.UV((c + 1) / b, a / d)]);
    this.computeCentroids()
};
THREE.PlaneGeometry.prototype = new THREE.Geometry;
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.SphereGeometry = function (a, c, b) {
    THREE.Geometry.call(this);
    for (var a = a || 50, d, g = Math.PI, e = Math.max(3, c || 8), f = Math.max(2, b || 6), c = [], b = 0; b < f + 1; b++) {
        d = b / f;
        var h = a * Math.cos(d * g),
            i = a * Math.sin(d * g),
            l = [],
            k = 0;
        for (d = 0; d < e; d++) {
            var p = 2 * d / e,
                q = i * Math.sin(p * g),
                p = i * Math.cos(p * g);
            (b == 0 || b == f) && d > 0 || (k = this.vertices.push(new THREE.Vertex(new THREE.Vector3(p, h, q))) - 1);
            l.push(k)
        }
        c.push(l)
    }
    for (var m, t, n, g = c.length, b = 0; b < g; b++)
        if (e = c[b].length, b > 0)
            for (d = 0; d < e; d++) {
                l = d == e - 1;
                f = c[b][l ? 0 : d + 1];
                h = c[b][l ? e - 1 : d];
                i = c[b - 1][l ?
                    e - 1 : d
                ];
                l = c[b - 1][l ? 0 : d + 1];
                q = b / (g - 1);
                m = (b - 1) / (g - 1);
                t = (d + 1) / e;
                var p = d / e,
                    k = new THREE.UV(1 - t, q),
                    q = new THREE.UV(1 - p, q),
                    p = new THREE.UV(1 - p, m),
                    o = new THREE.UV(1 - t, m);
                b < c.length - 1 && (m = this.vertices[f].position.clone(), t = this.vertices[h].position.clone(), n = this.vertices[i].position.clone(), m.normalize(), t.normalize(), n.normalize(), this.faces.push(new THREE.Face3(f, h, i, [new THREE.Vector3(m.x, m.y, m.z), new THREE.Vector3(t.x, t.y, t.z), new THREE.Vector3(n.x, n.y, n.z)])), this.faceVertexUvs[0].push([k, q, p]));
                b > 1 && (m =
                    this.vertices[f].position.clone(), t = this.vertices[i].position.clone(), n = this.vertices[l].position.clone(), m.normalize(), t.normalize(), n.normalize(), this.faces.push(new THREE.Face3(f, i, l, [new THREE.Vector3(m.x, m.y, m.z), new THREE.Vector3(t.x, t.y, t.z), new THREE.Vector3(n.x, n.y, n.z)])), this.faceVertexUvs[0].push([k, p, o]))
            }
        this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.boundingSphere = {
        radius: a
    }
};
THREE.SphereGeometry.prototype = new THREE.Geometry;
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.TextGeometry = function (a, c) {
    var b = (new THREE.TextPath(a, c)).toShapes();
    c.amount = c.height !== void 0 ? c.height : 50;
    if (c.bevelThickness === void 0) c.bevelThickness = 10;
    if (c.bevelSize === void 0) c.bevelSize = 8;
    if (c.bevelEnabled === void 0) c.bevelEnabled = !1;
    if (c.bend) {
        var d = b[b.length - 1].getBoundingBox().maxX;
        c.bendPath = new THREE.QuadraticBezierCurve(new THREE.Vector2(0, 0), new THREE.Vector2(d / 2, 120), new THREE.Vector2(d, 0))
    }
    THREE.ExtrudeGeometry.call(this, b, c)
};
THREE.TextGeometry.prototype = new THREE.ExtrudeGeometry;
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function () {
        return this.faces[this.face][this.weight][this.style]
    },
    loadFace: function (a) {
        var c = a.familyName.toLowerCase();
        this.faces[c] = this.faces[c] || {};
        this.faces[c][a.cssFontWeight] = this.faces[c][a.cssFontWeight] || {};
        this.faces[c][a.cssFontWeight][a.cssFontStyle] = a;
        return this.faces[c][a.cssFontWeight][a.cssFontStyle] = a
    },
    drawText: function (a) {
        for (var c = this.getFace(), b = this.size / c.resolution, d =
                0, g = String(a).split(""), e = g.length, f = [], a = 0; a < e; a++) {
            var h = new THREE.Path,
                h = this.extractGlyphPoints(g[a], c, b, d, h);
            d += h.offset;
            f.push(h.path)
        }
        return {
            paths: f,
            offset: d / 2
        }
    },
    extractGlyphPoints: function (a, c, b, d, g) {
        var e = [],
            f, h, i, l, k, p, q, m, t, n, o, s = c.glyphs[a] || c.glyphs["?"];
        if (s) {
            if (s.o) {
                c = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
                l = c.length;
                for (a = 0; a < l;) switch (i = c[a++], i) {
                case "m":
                    i = c[a++] * b + d;
                    k = c[a++] * b;
                    e.push(new THREE.Vector2(i, k));
                    g.moveTo(i, k);
                    break;
                case "l":
                    i = c[a++] * b + d;
                    k = c[a++] * b;
                    e.push(new THREE.Vector2(i,
                        k));
                    g.lineTo(i, k);
                    break;
                case "q":
                    i = c[a++] * b + d;
                    k = c[a++] * b;
                    m = c[a++] * b + d;
                    t = c[a++] * b;
                    g.quadraticCurveTo(m, t, i, k);
                    if (f = e[e.length - 1]) {
                        p = f.x;
                        q = f.y;
                        f = 1;
                        for (h = this.divisions; f <= h; f++) {
                            var u = f / h,
                                r = THREE.Shape.Utils.b2(u, p, m, i),
                                u = THREE.Shape.Utils.b2(u, q, t, k);
                            e.push(new THREE.Vector2(r, u))
                        }
                    }
                    break;
                case "b":
                    if (i = c[a++] * b + d, k = c[a++] * b, m = c[a++] * b + d, t = c[a++] * -b, n = c[a++] * b + d, o = c[a++] * -b, g.bezierCurveTo(i, k, m, t, n, o), f = e[e.length - 1]) {
                        p = f.x;
                        q = f.y;
                        f = 1;
                        for (h = this.divisions; f <= h; f++) u = f / h, r = THREE.Shape.Utils.b3(u, p, m,
                            n, i), u = THREE.Shape.Utils.b3(u, q, t, o, k), e.push(new THREE.Vector2(r, u))
                    }
                }
            }
            return {
                offset: s.ha * b,
                points: e,
                path: g
            }
        }
    }
};
(function (a) {
    var c = function (a) {
        for (var c = a.length, g = 0, e = c - 1, f = 0; f < c; e = f++) g += a[e].x * a[f].y - a[f].x * a[e].y;
        return g * 0.5
    };
    a.Triangulate = function (a, d) {
        var g = a.length;
        if (g < 3) return null;
        var e = [],
            f = [],
            h = [],
            i, l, k;
        if (c(a) > 0)
            for (l = 0; l < g; l++) f[l] = l;
        else
            for (l = 0; l < g; l++) f[l] = g - 1 - l;
        var p = 2 * g;
        for (l = g - 1; g > 2;) {
            if (p-- <= 0) {
                console.log("Warning, unable to triangulate polygon!");
                if (d) return h;
                return e
            }
            i = l;
            g <= i && (i = 0);
            l = i + 1;
            g <= l && (l = 0);
            k = l + 1;
            g <= k && (k = 0);
            var q;
            a: {
                q = a;
                var m = i,
                    t = l,
                    n = k,
                    o = g,
                    s = f,
                    u = void 0,
                    r = void 0,
                    z = void 0,
                    E = void 0,
                    G = void 0,
                    v = void 0,
                    w = void 0,
                    C = void 0,
                    F = void 0,
                    r = q[s[m]].x,
                    z = q[s[m]].y,
                    E = q[s[t]].x,
                    G = q[s[t]].y,
                    v = q[s[n]].x,
                    w = q[s[n]].y;
                if (1.0E-10 > (E - r) * (w - z) - (G - z) * (v - r)) q = !1;
                else {
                    for (u = 0; u < o; u++)
                        if (!(u == m || u == t || u == n)) {
                            var C = q[s[u]].x,
                                F = q[s[u]].y,
                                B = void 0,
                                L = void 0,
                                J = void 0,
                                W = void 0,
                                X = void 0,
                                T = void 0,
                                ea = void 0,
                                ba = void 0,
                                x = void 0,
                                I = void 0,
                                O = void 0,
                                M = void 0,
                                B = J = X = void 0,
                                B = v - E,
                                L = w - G,
                                J = r - v,
                                W = z - w,
                                X = E - r,
                                T = G - z,
                                ea = C - r,
                                ba = F - z,
                                x = C - E,
                                I = F - G,
                                O = C - v,
                                M = F - w,
                                B = B * I - L * x,
                                X = X * ba - T * ea,
                                J = J * M - W * O;
                            if (B >= 0 && J >= 0 && X >= 0) {
                                q = !1;
                                break a
                            }
                        }
                    q = !0
                }
            }
            if (q) {
                e.push([a[f[i]], a[f[l]], a[f[k]]]);
                h.push([f[i], f[l], f[k]]);
                i = l;
                for (k = l + 1; k < g; i++, k++) f[i] = f[k];
                g--;
                p = 2 * g
            }
        }
        if (d) return h;
        return e
    };
    a.Triangulate.area = c;
    return a
})(THREE.FontUtils);
self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
};
THREE.TorusGeometry = function (a, c, b, d, g) {
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = c || 40;
    this.segmentsR = b || 8;
    this.segmentsT = d || 6;
    this.arc = g || Math.PI * 2;
    g = new THREE.Vector3;
    a = [];
    c = [];
    for (b = 0; b <= this.segmentsR; b++)
        for (d = 0; d <= this.segmentsT; d++) {
            var e = d / this.segmentsT * this.arc,
                f = b / this.segmentsR * Math.PI * 2;
            g.x = this.radius * Math.cos(e);
            g.y = this.radius * Math.sin(e);
            var h = new THREE.Vector3;
            h.x = (this.radius + this.tube * Math.cos(f)) * Math.cos(e);
            h.y = (this.radius + this.tube * Math.cos(f)) * Math.sin(e);
            h.z =
                this.tube * Math.sin(f);
            this.vertices.push(new THREE.Vertex(h));
            a.push(new THREE.UV(d / this.segmentsT, 1 - b / this.segmentsR));
            c.push(h.clone().subSelf(g).normalize())
        }
    for (b = 1; b <= this.segmentsR; b++)
        for (d = 1; d <= this.segmentsT; d++) {
            var g = (this.segmentsT + 1) * b + d - 1,
                e = (this.segmentsT + 1) * (b - 1) + d - 1,
                f = (this.segmentsT + 1) * (b - 1) + d,
                h = (this.segmentsT + 1) * b + d,
                i = new THREE.Face4(g, e, f, h, [c[g], c[e], c[f], c[h]]);
            i.normal.addSelf(c[g]);
            i.normal.addSelf(c[e]);
            i.normal.addSelf(c[f]);
            i.normal.addSelf(c[h]);
            i.normal.normalize();
            this.faces.push(i);
            this.faceVertexUvs[0].push([a[g].clone(), a[e].clone(), a[f].clone(), a[h].clone()])
        }
    this.computeCentroids()
};
THREE.TorusGeometry.prototype = new THREE.Geometry;
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusKnotGeometry = function (a, c, b, d, g, e, f) {
    function h(a, b, c, d, e, f) {
        b = c / d * a;
        c = Math.cos(b);
        return new THREE.Vector3(e * (2 + c) * 0.5 * Math.cos(a), e * (2 + c) * Math.sin(a) * 0.5, f * e * Math.sin(b) * 0.5)
    }
    THREE.Geometry.call(this);
    this.radius = a || 200;
    this.tube = c || 40;
    this.segmentsR = b || 64;
    this.segmentsT = d || 8;
    this.p = g || 2;
    this.q = e || 3;
    this.heightScale = f || 1;
    this.grid = Array(this.segmentsR);
    b = new THREE.Vector3;
    d = new THREE.Vector3;
    e = new THREE.Vector3;
    for (a = 0; a < this.segmentsR; ++a) {
        this.grid[a] = Array(this.segmentsT);
        for (c = 0; c <
            this.segmentsT; ++c) {
            var i = a / this.segmentsR * 2 * this.p * Math.PI,
                f = c / this.segmentsT * 2 * Math.PI,
                g = h(i, f, this.q, this.p, this.radius, this.heightScale),
                i = h(i + 0.01, f, this.q, this.p, this.radius, this.heightScale);
            b.x = i.x - g.x;
            b.y = i.y - g.y;
            b.z = i.z - g.z;
            d.x = i.x + g.x;
            d.y = i.y + g.y;
            d.z = i.z + g.z;
            e.cross(b, d);
            d.cross(e, b);
            e.normalize();
            d.normalize();
            i = -this.tube * Math.cos(f);
            f = this.tube * Math.sin(f);
            g.x += i * d.x + f * e.x;
            g.y += i * d.y + f * e.y;
            g.z += i * d.z + f * e.z;
            this.grid[a][c] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(g.x, g.y,
                g.z))) - 1
        }
    }
    for (a = 0; a < this.segmentsR; ++a)
        for (c = 0; c < this.segmentsT; ++c) {
            var d = (a + 1) % this.segmentsR,
                e = (c + 1) % this.segmentsT,
                g = this.grid[a][c],
                b = this.grid[d][c],
                d = this.grid[d][e],
                e = this.grid[a][e],
                f = new THREE.UV(a / this.segmentsR, c / this.segmentsT),
                i = new THREE.UV((a + 1) / this.segmentsR, c / this.segmentsT),
                l = new THREE.UV((a + 1) / this.segmentsR, (c + 1) / this.segmentsT),
                k = new THREE.UV(a / this.segmentsR, (c + 1) / this.segmentsT);
            this.faces.push(new THREE.Face4(g, b, d, e));
            this.faceVertexUvs[0].push([f, i, l, k])
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = new THREE.Geometry;
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.SubdivisionModifier = function (a) {
    this.subdivisions = a === void 0 ? 1 : a;
    this.useOldVertexColors = !1;
    this.supportUVs = !0
};
THREE.SubdivisionModifier.prototype.constructor = THREE.SubdivisionModifier;
THREE.SubdivisionModifier.prototype.modify = function (a) {
    for (var c = this.subdivisions; c-- > 0;) this.smooth(a)
};
THREE.SubdivisionModifier.prototype.smooth = function (a) {
    function c(a, b, c, d, h, i) {
        var k = new THREE.Face4(a, b, c, d, null, h.color, h.material);
        if (f.useOldVertexColors) {
            k.vertexColors = [];
            for (var j, l, m, n = 0; n < 4; n++) {
                m = i[n];
                j = new THREE.Color;
                j.setRGB(0, 0, 0);
                for (var o = 0; o < m.length; o++) l = h.vertexColors[m[o] - 1], j.r += l.r, j.g += l.g, j.b += l.b;
                j.r /= m.length;
                j.g /= m.length;
                j.b /= m.length;
                k.vertexColors[n] = j
            }
        }
        g.push(k);
        (!f.supportUVs || q.length != 0) && e.push([q[a], q[b], q[c], q[d]])
    }

    function b(a, b) {
        return Math.min(a, b) + "_" + Math.max(a,
            b)
    }
    var d = [],
        g = [],
        e = [],
        f = this,
        h = a.vertices,
        d = a.faces,
        i = h.concat(),
        l = [],
        k = {}, p = {}, q = [],
        m, t, n, o, s, u = a.faceVertexUvs[0];
    m = 0;
    for (t = u.length; m < t; m++) {
        n = 0;
        for (o = u[m].length; n < o; n++) s = d[m]["abcd".charAt(n)], q[s] || (q[s] = u[m][n])
    }
    var r;
    m = 0;
    for (t = d.length; m < t; m++)
        if (s = d[m], l.push(s.centroid), i.push(new THREE.Vertex(s.centroid)), f.supportUVs && q.length != 0) {
            r = new THREE.UV;
            if (s instanceof THREE.Face3) r.u = q[s.a].u + q[s.b].u + q[s.c].u, r.v = q[s.a].v + q[s.b].v + q[s.c].v, r.u /= 3, r.v /= 3;
            else if (s instanceof THREE.Face4) r.u =
                q[s.a].u + q[s.b].u + q[s.c].u + q[s.d].u, r.v = q[s.a].v + q[s.b].v + q[s.c].v + q[s.d].v, r.u /= 4, r.v /= 4;
            q.push(r)
        }
    t = function (a) {
        function c(a, b, d) {
            a[b] === void 0 && (a[b] = []);
            a[b].push(d)
        }
        var d, e, f, g, h = {};
        d = 0;
        for (e = a.faces.length; d < e; d++) f = a.faces[d], f instanceof THREE.Face3 ? (g = b(f.a, f.b), c(h, g, d), g = b(f.b, f.c), c(h, g, d), g = b(f.c, f.a), c(h, g, d)) : f instanceof THREE.Face4 && (g = b(f.a, f.b), c(h, g, d), g = b(f.b, f.c), c(h, g, d), g = b(f.c, f.d), c(h, g, d), g = b(f.d, f.a), c(h, g, d));
        return h
    }(a);
    var z = 0,
        u = h.length,
        E, G, v = {}, w = {}, C = function (a,
            b) {
            v[a] === void 0 && (v[a] = []);
            v[a].push(b)
        }, F = function (a, b) {
            w[a] === void 0 && (w[a] = {});
            w[a][b] = null
        };
    for (m in t) {
        r = t[m];
        E = m.split("_");
        G = E[0];
        E = E[1];
        C(G, [G, E]);
        C(E, [G, E]);
        n = 0;
        for (o = r.length; n < o; n++) s = r[n], F(G, s, m), F(E, s, m);
        r.length < 2 && (p[m] = !0)
    }
    for (m in t)
        if (r = t[m], s = r[0], r = r[1], E = m.split("_"), G = E[0], E = E[1], o = new THREE.Vector3, p[m] ? (o.addSelf(h[G].position), o.addSelf(h[E].position), o.multiplyScalar(0.5)) : (o.addSelf(l[s]), o.addSelf(l[r]), o.addSelf(h[G].position), o.addSelf(h[E].position), o.multiplyScalar(0.25)),
            k[m] = u + d.length + z, i.push(new THREE.Vertex(o)), z++, f.supportUVs && q.length != 0) r = new THREE.UV, r.u = q[G].u + q[E].u, r.v = q[G].v + q[E].v, r.u /= 2, r.v /= 2, q.push(r);
    var B, L;
    E = ["123", "12", "2", "23"];
    o = ["123", "23", "3", "31"];
    var C = ["123", "31", "1", "12"],
        F = ["1234", "12", "2", "23"],
        J = ["1234", "23", "3", "34"],
        W = ["1234", "34", "4", "41"],
        X = ["1234", "41", "1", "12"];
    m = 0;
    for (t = l.length; m < t; m++) s = d[m], r = u + m, s instanceof THREE.Face3 ? (z = b(s.a, s.b), G = b(s.b, s.c), B = b(s.c, s.a), c(r, k[z], s.b, k[G], s, E), c(r, k[G], s.c, k[B], s, o), c(r, k[B], s.a, k[z],
        s, C)) : s instanceof THREE.Face4 ? (z = b(s.a, s.b), G = b(s.b, s.c), B = b(s.c, s.d), L = b(s.d, s.a), c(r, k[z], s.b, k[G], s, F), c(r, k[G], s.c, k[B], s, J), c(r, k[B], s.d, k[L], s, W), c(r, k[L], s.a, k[z], s, X)) : console.log("face should be a face!", s);
    d = i;
    i = new THREE.Vector3;
    k = new THREE.Vector3;
    m = 0;
    for (t = h.length; m < t; m++)
        if (v[m] !== void 0) {
            i.set(0, 0, 0);
            k.set(0, 0, 0);
            s = new THREE.Vector3(0, 0, 0);
            r = 0;
            for (n in w[m]) i.addSelf(l[n]), r++;
            z = 0;
            u = v[m].length;
            for (n = 0; n < u; n++) p[b(v[m][n][0], v[m][n][1])] && z++;
            if (z != 2) {
                i.divideScalar(r);
                for (n = 0; n <
                    u; n++) r = v[m][n], r = h[r[0]].position.clone().addSelf(h[r[1]].position).divideScalar(2), k.addSelf(r);
                k.divideScalar(u);
                s.addSelf(h[m].position);
                s.multiplyScalar(u - 3);
                s.addSelf(i);
                s.addSelf(k.multiplyScalar(2));
                s.divideScalar(u);
                d[m].position = s
            }
        }
    a.vertices = d;
    a.faces = g;
    a.faceVertexUvs[0] = e;
    delete a.__tmpVertices;
    a.computeCentroids();
    a.computeFaceNormals();
    a.computeVertexNormals()
};
THREE.Loader = function (a) {
    this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function () {};
    this.onLoadProgress = function () {};
    this.onLoadComplete = function () {}
};
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    addStatusElement: function () {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.right = "0px";
        a.style.top = "0px";
        a.style.fontSize = "0.8em";
        a.style.textAlign = "left";
        a.style.background = "rgba(0,0,0,0.25)";
        a.style.color = "#fff";
        a.style.width = "120px";
        a.style.padding = "0.5em 0.5em 0.5em 0.5em";
        a.style.zIndex = 1E3;
        a.innerHTML = "Loading ...";
        return a
    },
    updateProgress: function (a) {
        var c = "Loaded ";
        c += a.total ? (100 * a.loaded / a.total).toFixed(0) + "%" : (a.loaded /
            1E3).toFixed(2) + " KB";
        this.statusDomElement.innerHTML = c
    },
    extractUrlbase: function (a) {
        a = a.split("/");
        a.pop();
        return a.length < 1 ? "" : a.join("/") + "/"
    },
    initMaterials: function (a, c, b) {
        a.materials = [];
        for (var d = 0; d < c.length; ++d) a.materials[d] = THREE.Loader.prototype.createMaterial(c[d], b)
    },
    hasNormals: function (a) {
        var c, b, d = a.materials.length;
        for (b = 0; b < d; b++)
            if (c = a.materials[b], c instanceof THREE.ShaderMaterial) return !0;
        return !1
    },
    createMaterial: function (a, c) {
        function b(a) {
            a = Math.log(a) / Math.LN2;
            return Math.floor(a) ==
                a
        }

        function d(a, c) {
            var d = new Image;
            d.onload = function () {
                if (!b(this.width) || !b(this.height)) {
                    var c = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),
                        d = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
                    a.image.width = c;
                    a.image.height = d;
                    a.image.getContext("2d").drawImage(this, 0, 0, c, d)
                } else a.image = this;
                a.needsUpdate = !0
            };
            d.src = c
        }

        function g(a, b, e, f, g, h) {
            var i = document.createElement("canvas");
            a[b] = new THREE.Texture(i);
            a[b].sourceFile = e;
            if (f) {
                a[b].repeat.set(f[0], f[1]);
                if (f[0] != 1) a[b].wrapS = THREE.RepeatWrapping;
                if (f[1] != 1) a[b].wrapT = THREE.RepeatWrapping
            }
            g && a[b].offset.set(g[0], g[1]);
            if (h) {
                f = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                };
                if (f[h[0]] !== void 0) a[b].wrapS = f[h[0]];
                if (f[h[1]] !== void 0) a[b].wrapT = f[h[1]]
            }
            d(a[b], c + "/" + e)
        }

        function e(a) {
            return (a[0] * 255 << 16) + (a[1] * 255 << 8) + a[2] * 255
        }
        var f, h, i;
        h = "MeshLambertMaterial";
        f = {
            color: 15658734,
            opacity: 1,
            map: null,
            lightMap: null,
            normalMap: null,
            wireframe: a.wireframe
        };
        a.shading && (a.shading == "Phong" ? h = "MeshPhongMaterial" : a.shading == "Basic" && (h = "MeshBasicMaterial"));
        if (a.blending)
            if (a.blending == "Additive") f.blending = THREE.AdditiveBlending;
            else if (a.blending == "Subtractive") f.blending = THREE.SubtractiveBlending;
        else if (a.blending == "Multiply") f.blending = THREE.MultiplyBlending;
        if (a.transparent !== void 0 || a.opacity < 1) f.transparent = a.transparent;
        if (a.depthTest !== void 0) f.depthTest = a.depthTest;
        if (a.vertexColors !== void 0)
            if (a.vertexColors == "face") f.vertexColors = THREE.FaceColors;
            else if (a.vertexColors) f.vertexColors = THREE.VertexColors;
        if (a.colorDiffuse) f.color = e(a.colorDiffuse);
        else if (a.DbgColor) f.color = a.DbgColor;
        if (a.colorSpecular) f.specular = e(a.colorSpecular);
        if (a.colorAmbient) f.ambient = e(a.colorAmbient);
        if (a.transparency) f.opacity = a.transparency;
        if (a.specularCoef) f.shininess = a.specularCoef;
        a.mapDiffuse && c && g(f, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap);
        a.mapLight && c && g(f, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap);
        a.mapNormal && c && g(f, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap);
        a.mapSpecular && c && g(f, "specularMap", a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap);
        if (a.mapNormal) {
            var l = THREE.ShaderUtils.lib.normal,
                k = THREE.UniformsUtils.clone(l.uniforms),
                p = f.color;
            h = f.specular;
            i = f.ambient;
            var q = f.shininess;
            k.tNormal.texture = f.normalMap;
            if (a.mapNormalFactor) k.uNormalScale.value = a.mapNormalFactor;
            if (f.map) k.tDiffuse.texture = f.map, k.enableDiffuse.value = !0;
            if (f.specularMap) k.tSpecular.texture = f.specularMap, k.enableSpecular.value = !0;
            if (f.lightMap) k.tAO.texture =
                f.lightMap, k.enableAO.value = !0;
            k.uDiffuseColor.value.setHex(p);
            k.uSpecularColor.value.setHex(h);
            k.uAmbientColor.value.setHex(i);
            k.uShininess.value = q;
            if (f.opacity) k.uOpacity.value = f.opacity;
            f = new THREE.ShaderMaterial({
                fragmentShader: l.fragmentShader,
                vertexShader: l.vertexShader,
                uniforms: k,
                lights: !0,
                fog: !0
            })
        } else f = new THREE[h](f);
        return f
    }
};
THREE.BinaryLoader = function (a) {
    THREE.Loader.call(this, a)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype.load = function (a, c, b, d) {
    if (a instanceof Object) console.warn("DEPRECATED: BinaryLoader( parameters ) is now BinaryLoader( url, callback, texturePath, binaryPath )."), d = a, a = d.model, c = d.callback, b = d.texture_path, d = d.bin_path;
    var b = b ? b : this.extractUrlbase(a),
        d = d ? d : this.extractUrlbase(a),
        g = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
    this.onLoadStart();
    this.loadAjaxJSON(this, a, c, b, d, g)
};
THREE.BinaryLoader.prototype.loadAjaxJSON = function (a, c, b, d, g, e) {
    var f = new XMLHttpRequest;
    f.onreadystatechange = function () {
        if (f.readyState == 4)
            if (f.status == 200 || f.status == 0) try {
                var h = JSON.parse(f.responseText);
                h.metadata === void 0 || h.metadata.formatVersion === void 0 || h.metadata.formatVersion !== 3 ? console.error("Deprecated file format.") : a.loadAjaxBuffers(h, b, g, d, e)
            } catch (i) {
                console.error(i), console.warn("DEPRECATED: [" + c + "] seems to be using old model format")
            } else console.error("Couldn't load [" + c + "] [" +
                f.status + "]")
    };
    f.open("GET", c, !0);
    f.overrideMimeType("text/plain; charset=x-user-defined");
    f.setRequestHeader("Content-Type", "text/plain");
    f.send(null)
};
THREE.BinaryLoader.prototype.loadAjaxBuffers = function (a, c, b, d, g) {
    var e = new XMLHttpRequest,
        f = b + "/" + a.buffers,
        h = 0;
    e.onreadystatechange = function () {
        e.readyState == 4 ? e.status == 200 || e.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(e.response, c, d, a.materials) : console.error("Couldn't load [" + f + "] [" + e.status + "]") : e.readyState == 3 ? g && (h == 0 && (h = e.getResponseHeader("Content-Length")), g({
            total: h,
            loaded: e.responseText.length
        })) : e.readyState == 2 && (h = e.getResponseHeader("Content-Length"))
    };
    e.open("GET", f, !0);
    e.responseType = "arraybuffer";
    e.send(null)
};
THREE.BinaryLoader.prototype.createBinModel = function (a, c, b, d) {
    var g = function (b) {
        function c(a) {
            return a % 4 ? 4 - a % 4 : 0
        }

        function g(a, b) {
            return (new Uint8Array(a, b, 1))[0]
        }

        function i(a, b) {
            return (new Uint32Array(a, b, 1))[0]
        }

        function l(b, c) {
            var d, e, f, g, h, i, k, l, m = new Uint32Array(a, c, 3 * b);
            for (d = 0; d < b; d++) {
                e = m[d * 3];
                f = m[d * 3 + 1];
                g = m[d * 3 + 2];
                h = r[e * 2];
                e = r[e * 2 + 1];
                i = r[f * 2];
                k = r[f * 2 + 1];
                f = r[g * 2];
                l = r[g * 2 + 1];
                g = n.faceVertexUvs[0];
                var o = [];
                o.push(new THREE.UV(h, e));
                o.push(new THREE.UV(i, k));
                o.push(new THREE.UV(f, l));
                g.push(o)
            }
        }

        function k(b, c) {
            var d, e, f, g, h, i, k, l, m, o, p = new Uint32Array(a, c, 4 * b);
            for (d = 0; d < b; d++) {
                e = p[d * 4];
                f = p[d * 4 + 1];
                g = p[d * 4 + 2];
                h = p[d * 4 + 3];
                i = r[e * 2];
                e = r[e * 2 + 1];
                k = r[f * 2];
                m = r[f * 2 + 1];
                l = r[g * 2];
                o = r[g * 2 + 1];
                g = r[h * 2];
                f = r[h * 2 + 1];
                h = n.faceVertexUvs[0];
                var j = [];
                j.push(new THREE.UV(i, e));
                j.push(new THREE.UV(k, m));
                j.push(new THREE.UV(l, o));
                j.push(new THREE.UV(g, f));
                h.push(j)
            }
        }

        function p(b, c, d) {
            for (var e, f, g, h, c = new Uint32Array(a, c, 3 * b), i = new Uint16Array(a, d, b), d = 0; d < b; d++) e = c[d * 3], f = c[d * 3 + 1], g = c[d * 3 + 2], h = i[d], n.faces.push(new THREE.Face3(e,
                f, g, null, null, h))
        }

        function q(b, c, d) {
            for (var e, f, g, h, i, c = new Uint32Array(a, c, 4 * b), k = new Uint16Array(a, d, b), d = 0; d < b; d++) e = c[d * 4], f = c[d * 4 + 1], g = c[d * 4 + 2], h = c[d * 4 + 3], i = k[d], n.faces.push(new THREE.Face4(e, f, g, h, null, null, i))
        }

        function m(b, c, d, e) {
            for (var f, g, h, i, k, l, m, c = new Uint32Array(a, c, 3 * b), d = new Uint32Array(a, d, 3 * b), o = new Uint16Array(a, e, b), e = 0; e < b; e++) {
                f = c[e * 3];
                g = c[e * 3 + 1];
                h = c[e * 3 + 2];
                k = d[e * 3];
                l = d[e * 3 + 1];
                m = d[e * 3 + 2];
                i = o[e];
                var p = u[l * 3],
                    j = u[l * 3 + 1];
                l = u[l * 3 + 2];
                var q = u[m * 3],
                    s = u[m * 3 + 1];
                m = u[m * 3 + 2];
                n.faces.push(new THREE.Face3(f,
                    g, h, [new THREE.Vector3(u[k * 3], u[k * 3 + 1], u[k * 3 + 2]), new THREE.Vector3(p, j, l), new THREE.Vector3(q, s, m)], null, i))
            }
        }

        function t(b, c, d, e) {
            for (var f, g, h, i, k, l, m, o, p, c = new Uint32Array(a, c, 4 * b), d = new Uint32Array(a, d, 4 * b), j = new Uint16Array(a, e, b), e = 0; e < b; e++) {
                f = c[e * 4];
                g = c[e * 4 + 1];
                h = c[e * 4 + 2];
                i = c[e * 4 + 3];
                l = d[e * 4];
                m = d[e * 4 + 1];
                o = d[e * 4 + 2];
                p = d[e * 4 + 3];
                k = j[e];
                var q = u[m * 3],
                    s = u[m * 3 + 1];
                m = u[m * 3 + 2];
                var r = u[o * 3],
                    t = u[o * 3 + 1];
                o = u[o * 3 + 2];
                var v = u[p * 3],
                    w = u[p * 3 + 1];
                p = u[p * 3 + 2];
                n.faces.push(new THREE.Face4(f, g, h, i, [new THREE.Vector3(u[l *
                    3], u[l * 3 + 1], u[l * 3 + 2]), new THREE.Vector3(q, s, m), new THREE.Vector3(r, t, o), new THREE.Vector3(v, w, p)], null, k))
            }
        }
        var n = this,
            o = 0,
            s, u = [],
            r = [],
            z, E, G, v, w, C;
        THREE.Geometry.call(this);
        THREE.Loader.prototype.initMaterials(n, d, b);
        s = {
            signature: function (a, b, c) {
                for (var a = new Uint8Array(a, b, c), d = "", e = 0; e < c; e++) d += String.fromCharCode(a[b + e]);
                return d
            }(a, o, 12),
            header_bytes: g(a, o + 12),
            vertex_coordinate_bytes: g(a, o + 13),
            normal_coordinate_bytes: g(a, o + 14),
            uv_coordinate_bytes: g(a, o + 15),
            vertex_index_bytes: g(a, o + 16),
            normal_index_bytes: g(a,
                o + 17),
            uv_index_bytes: g(a, o + 18),
            material_index_bytes: g(a, o + 19),
            nvertices: i(a, o + 20),
            nnormals: i(a, o + 20 + 4),
            nuvs: i(a, o + 20 + 8),
            ntri_flat: i(a, o + 20 + 12),
            ntri_smooth: i(a, o + 20 + 16),
            ntri_flat_uv: i(a, o + 20 + 20),
            ntri_smooth_uv: i(a, o + 20 + 24),
            nquad_flat: i(a, o + 20 + 28),
            nquad_smooth: i(a, o + 20 + 32),
            nquad_flat_uv: i(a, o + 20 + 36),
            nquad_smooth_uv: i(a, o + 20 + 40)
        };
        s.signature !== "Three.js 003" && console.warn("DEPRECATED: binary model seems to be using old format");
        o += s.header_bytes;
        b = s.vertex_index_bytes * 3 + s.material_index_bytes;
        C = s.vertex_index_bytes *
            4 + s.material_index_bytes;
        z = s.ntri_flat * b;
        E = s.ntri_smooth * (b + s.normal_index_bytes * 3);
        G = s.ntri_flat_uv * (b + s.uv_index_bytes * 3);
        v = s.ntri_smooth_uv * (b + s.normal_index_bytes * 3 + s.uv_index_bytes * 3);
        w = s.nquad_flat * C;
        b = s.nquad_smooth * (C + s.normal_index_bytes * 4);
        C = s.nquad_flat_uv * (C + s.uv_index_bytes * 4);
        o += function (b) {
            var c = s.nvertices,
                b = new Float32Array(a, b, c * 3),
                d, e, f, g;
            for (d = 0; d < c; d++) e = b[d * 3], f = b[d * 3 + 1], g = b[d * 3 + 2], n.vertices.push(new THREE.Vertex(new THREE.Vector3(e, f, g)));
            return c * 3 * Float32Array.BYTES_PER_ELEMENT
        }(o);
        o += function (b) {
            var c = s.nnormals;
            if (c) {
                var b = new Int8Array(a, b, c * 3),
                    d, e, f, g;
                for (d = 0; d < c; d++) e = b[d * 3], f = b[d * 3 + 1], g = b[d * 3 + 2], u.push(e / 127, f / 127, g / 127)
            }
            return c * 3 * Int8Array.BYTES_PER_ELEMENT
        }(o);
        o += c(s.nnormals * 3);
        o += function (b) {
            var c = s.nuvs;
            if (c) {
                var b = new Float32Array(a, b, c * 2),
                    d, e, f;
                for (d = 0; d < c; d++) e = b[d * 2], f = b[d * 2 + 1], r.push(e, f)
            }
            return c * 2 * Float32Array.BYTES_PER_ELEMENT
        }(o);
        z = o + z + c(s.ntri_flat * 2);
        E = z + E + c(s.ntri_smooth * 2);
        G = E + G + c(s.ntri_flat_uv * 2);
        v = G + v + c(s.ntri_smooth_uv * 2);
        w = v + w + c(s.nquad_flat * 2);
        b = w + b + c(s.nquad_smooth * 2);
        C = b + C + c(s.nquad_flat_uv * 2);
        (function (a) {
            var b = s.ntri_flat_uv;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 3;
                p(b, a, c + b * Uint32Array.BYTES_PER_ELEMENT * 3);
                l(b, c)
            }
        })(E);
        (function (a) {
            var b = s.ntri_smooth_uv;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 3,
                    d = c + b * Uint32Array.BYTES_PER_ELEMENT * 3;
                m(b, a, c, d + b * Uint32Array.BYTES_PER_ELEMENT * 3);
                l(b, d)
            }
        })(G);
        (function (a) {
            var b = s.nquad_flat_uv;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 4;
                q(b, a, c + b * Uint32Array.BYTES_PER_ELEMENT * 4);
                k(b,
                    c)
            }
        })(b);
        (function (a) {
            var b = s.nquad_smooth_uv;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 4,
                    d = c + b * Uint32Array.BYTES_PER_ELEMENT * 4;
                t(b, a, c, d + b * Uint32Array.BYTES_PER_ELEMENT * 4);
                k(b, d)
            }
        })(C);
        (function (a) {
            var b = s.ntri_flat;
            b && p(b, a, a + b * Uint32Array.BYTES_PER_ELEMENT * 3)
        })(o);
        (function (a) {
            var b = s.ntri_smooth;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 3;
                m(b, a, c, c + b * Uint32Array.BYTES_PER_ELEMENT * 3)
            }
        })(z);
        (function (a) {
            var b = s.nquad_flat;
            b && q(b, a, a + b * Uint32Array.BYTES_PER_ELEMENT * 4)
        })(v);
        (function (a) {
            var b =
                s.nquad_smooth;
            if (b) {
                var c = a + b * Uint32Array.BYTES_PER_ELEMENT * 4;
                t(b, a, c, c + b * Uint32Array.BYTES_PER_ELEMENT * 4)
            }
        })(w);
        this.computeCentroids();
        this.computeFaceNormals();
        THREE.Loader.prototype.hasNormals(this) && this.computeTangents()
    };
    g.prototype = new THREE.Geometry;
    g.prototype.constructor = g;
    c(new g(b))
};
THREE.ColladaLoader = function () {
    function a(a, d, g) {
        V = a;
        d = d || fa;
        g !== void 0 && (a = g.split("/"), a.pop(), ya = a.length < 1 ? "" : a.join("/") + "/");
        ia = c("//dae:library_images/dae:image", f, "image");
        oa = c("//dae:library_materials/dae:material", w, "material");
        la = c("//dae:library_effects/dae:effect", J, "effect");
        ka = c("//dae:library_geometries/dae:geometry", o, "geometry");
        na = c("//dae:library_controllers/dae:controller", h, "controller");
        pa = c("//dae:library_animations/dae:animation", X, "animation");
        ma = c(".//dae:library_visual_scenes/dae:visual_scene",
            k, "visual_scene");
        ra = [];
        sa = [];
        (a = V.evaluate(".//dae:scene/dae:instance_visual_scene", V, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) ? (a = a.getAttribute("url").replace(/^#/, ""), K = ma[a]) : K = null;
        Q = new THREE.Object3D;
        for (a = 0; a < K.nodes.length; a++) Q.add(e(K.nodes[a]));
        b();
        for (var i in pa);
        i = {
            scene: Q,
            morphs: ra,
            skins: sa,
            dae: {
                images: ia,
                materials: oa,
                effects: la,
                geometries: ka,
                controllers: na,
                animations: pa,
                visualScenes: ma,
                scene: K
            }
        };
        d && d(i);
        return i
    }

    function c(a, b, c) {
        for (var a = V.evaluate(a, V, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE,
            null), d = {}, e = a.iterateNext(), f = 0; e;) {
            e = (new b).parse(e);
            if (e.id.length == 0) e.id = c + f++;
            d[e.id] = e;
            e = a.iterateNext()
        }
        return d
    }

    function b() {
        var a = 1E6,
            b = -a,
            c = 0,
            d;
        for (d in pa)
            for (var e = pa[d], f = 0; f < e.sampler.length; f++) {
                var g = e.sampler[f];
                g.create();
                a = Math.min(a, g.startTime);
                b = Math.max(b, g.endTime);
                c = Math.max(c, g.input.length)
            }
        return {
            start: a,
            end: b,
            frames: c
        }
    }

    function d(a, b, c, e) {
        a.world = a.world || new THREE.Matrix4;
        a.world.copy(a.matrix);
        if (a.channels && a.channels.length) {
            var f = a.channels[0].sampler.output[c];
            f instanceof THREE.Matrix4 && a.world.copy(f)
        }
        e && a.world.multiply(e, a.world);
        b.push(a);
        for (e = 0; e < a.nodes.length; e++) d(a.nodes[e], b, c, a.world)
    }

    function g(a, c, e) {
        var f = na[c.url];
        if (!f || !f.skin) console.log("ColladaLoader: Could not find skin controller.");
        else if (!c.skeleton || !c.skeleton.length) console.log("ColladaLoader: Could not find the skeleton for the skin. ");
        else {
            var g = b(),
                c = K.getChildById(c.skeleton[0], !0) || K.getChildBySid(c.skeleton[0], !0),
                h, i, j, k, l = new THREE.Vector3,
                m;
            for (h = 0; h < a.vertices.length; h++) f.skin.bindShapeMatrix.multiplyVector3(a.vertices[h].position);
            for (e = 0; e < g.frames; e++) {
                var n = [],
                    o = [];
                for (h = 0; h < a.vertices.length; h++) o.push(new THREE.Vertex(new THREE.Vector3));
                d(c, n, e);
                h = n;
                i = f.skin;
                for (k = 0; k < h.length; k++)
                    if (j = h[k], m = -1, j.type == "JOINT") {
                        for (var p = 0; p < i.joints.length; p++)
                            if (j.sid == i.joints[p]) {
                                m = p;
                                break
                            }
                        if (m >= 0) {
                            p = i.invBindMatrices[m];
                            j.invBindMatrix = p;
                            j.skinningMatrix = new THREE.Matrix4;
                            j.skinningMatrix.multiply(j.world, p);
                            j.weights = [];
                            for (p = 0; p < i.weights.length; p++)
                                for (var q = 0; q < i.weights[p].length; q++) {
                                    var s = i.weights[p][q];
                                    s.joint == m && j.weights.push(s)
                                }
                        } else throw "ColladaLoader: Could not find joint '" +
                            j.sid + "'.";
                    }
                for (h = 0; h < n.length; h++)
                    if (n[h].type == "JOINT")
                        for (i = 0; i < n[h].weights.length; i++) j = n[h].weights[i], k = j.index, j = j.weight, m = a.vertices[k], k = o[k], l.x = m.position.x, l.y = m.position.y, l.z = m.position.z, n[h].skinningMatrix.multiplyVector3(l), k.position.x += l.x * j, k.position.y += l.y * j, k.position.z += l.z * j;
                a.morphTargets.push({
                    name: "target_" + e,
                    vertices: o
                })
            }
        }
    }

    function e(a) {
        var b = new THREE.Object3D,
            c, d, f, h;
        for (f = 0; f < a.controllers.length; f++) {
            var i = na[a.controllers[f].url];
            switch (i.type) {
            case "skin":
                if (ka[i.skin.source]) {
                    var j =
                        new n;
                    j.url = i.skin.source;
                    j.instance_material = a.controllers[f].instance_material;
                    a.geometries.push(j);
                    c = a.controllers[f]
                } else if (na[i.skin.source] && (d = i = na[i.skin.source], i.morph && ka[i.morph.source])) j = new n, j.url = i.morph.source, j.instance_material = a.controllers[f].instance_material, a.geometries.push(j);
                break;
            case "morph":
                if (ka[i.morph.source]) j = new n, j.url = i.morph.source, j.instance_material = a.controllers[f].instance_material, a.geometries.push(j), d = a.controllers[f];
                console.log("ColladaLoader: Morph-controller partially supported.")
            }
        }
        for (f =
            0; f < a.geometries.length; f++) {
            var i = a.geometries[f],
                j = i.instance_material,
                i = ka[i.url],
                k = {}, l = 0,
                o;
            if (i && i.mesh && i.mesh.primitives) {
                if (b.name.length == 0) b.name = i.id;
                if (j)
                    for (h = 0; h < j.length; h++) {
                        o = j[h];
                        var p = la[oa[o.target].instance_effect.url].shader;
                        p.material.opacity = !p.material.opacity ? 1 : p.material.opacity;
                        o = k[o.symbol] = p.material;
                        l++
                    }
                j = o || new THREE.MeshLambertMaterial({
                    color: 14540253,
                    shading: THREE.FlatShading
                });
                i = i.mesh.geometry3js;
                if (l > 1) {
                    j = new THREE.MeshFaceMaterial;
                    for (h = 0; h < i.faces.length; h++) l =
                        i.faces[h], l.materials = [k[l.daeMaterial]]
                }
                if (c !== void 0) g(i, c), j.morphTargets = !0, j = new THREE.SkinnedMesh(i, j), j.skeleton = c.skeleton, j.skinController = na[c.url], j.skinInstanceController = c, j.name = "skin_" + sa.length, sa.push(j);
                else if (d !== void 0) {
                    h = i;
                    k = d instanceof m ? na[d.url] : d;
                    if (!k || !k.morph) console.log("could not find morph controller!");
                    else {
                        k = k.morph;
                        for (l = 0; l < k.targets.length; l++)
                            if (p = ka[k.targets[l]], p.mesh && p.mesh.primitives && p.mesh.primitives.length) p = p.mesh.primitives[0].geometry, p.vertices.length ===
                                h.vertices.length && h.morphTargets.push({
                                    name: "target_1",
                                    vertices: p.vertices
                                });
                        h.morphTargets.push({
                            name: "target_Z",
                            vertices: h.vertices
                        })
                    }
                    j.morphTargets = !0;
                    j = new THREE.Mesh(i, j);
                    j.name = "morph_" + ra.length;
                    ra.push(j)
                } else j = new THREE.Mesh(i, j);
                a.geometries.length > 1 ? b.add(j) : b = j
            }
        }
        b.name = a.id || "";
        a.matrix.decompose(b.position, b.rotation, b.scale);
        for (f = 0; f < a.nodes.length; f++) b.add(e(a.nodes[f], a));
        return b
    }

    function f() {
        this.init_from = this.id = ""
    }

    function h() {
        this.type = this.name = this.id = "";
        this.morph = this.skin =
            null
    }

    function i() {
        this.weights = this.targets = this.source = this.method = null
    }

    function l() {
        this.source = "";
        this.bindShapeMatrix = null;
        this.invBindMatrices = [];
        this.joints = [];
        this.weights = []
    }

    function k() {
        this.name = this.id = "";
        this.nodes = [];
        this.scene = new THREE.Object3D
    }

    function p() {
        this.sid = this.name = this.id = "";
        this.nodes = [];
        this.controllers = [];
        this.transforms = [];
        this.geometries = [];
        this.channels = [];
        this.matrix = new THREE.Matrix4
    }

    function q() {
        this.type = this.sid = "";
        this.data = [];
        this.matrix = new THREE.Matrix4
    }

    function m() {
        this.url =
            "";
        this.skeleton = [];
        this.instance_material = []
    }

    function t() {
        this.target = this.symbol = ""
    }

    function n() {
        this.url = "";
        this.instance_material = []
    }

    function o() {
        this.id = "";
        this.mesh = null
    }

    function s(a) {
        this.geometry = a.id;
        this.primitives = [];
        this.geometry3js = this.vertices = null
    }

    function u() {}

    function r() {
        this.material = "";
        this.count = 0;
        this.inputs = [];
        this.vcount = null;
        this.p = [];
        this.geometry = new THREE.Geometry
    }

    function z() {
        this.source = "";
        this.stride = this.count = 0;
        this.params = []
    }

    function E() {
        this.input = {}
    }

    function G() {
        this.semantic =
            "";
        this.offset = 0;
        this.source = "";
        this.set = 0
    }

    function v(a) {
        this.id = a;
        this.type = null
    }

    function w() {
        this.name = this.id = "";
        this.instance_effect = null
    }

    function C() {
        this.color = new THREE.Color(0);
        this.color.setRGB(Math.random(), Math.random(), Math.random());
        this.color.a = 1;
        this.texcoord = this.texture = null
    }

    function F(a, b) {
        this.type = a;
        this.effect = b;
        this.material = null
    }

    function B(a) {
        this.effect = a;
        this.format = this.init_from = null
    }

    function L(a) {
        this.effect = a;
        this.mipfilter = this.magfilter = this.minfilter = this.wrap_t = this.wrap_s =
            this.source = null
    }

    function J() {
        this.name = this.id = "";
        this.sampler = this.surface = this.shader = null
    }

    function W() {
        this.url = ""
    }

    function X() {
        this.name = this.id = "";
        this.source = {};
        this.sampler = [];
        this.channel = []
    }

    function T(a) {
        this.animation = a;
        this.target = this.source = "";
        this.member = this.arrIndices = this.arrSyntax = this.dotSyntax = this.sid = null
    }

    function ea(a) {
        this.id = "";
        this.animation = a;
        this.inputs = [];
        this.endTime = this.startTime = this.interpolation = this.output = this.input = null;
        this.duration = 0
    }

    function ba(a) {
        var b = a.getAttribute("id");
        if (U[b] != void 0) return U[b];
        U[b] = (new v(b)).parse(a);
        return U[b]
    }

    function x(a) {
        if (a == "dae") return "http://www.collada.org/2005/11/COLLADASchema";
        return null
    }

    function I(a) {
        for (var a = M(a), b = [], c = 0; c < a.length; c++) b.push(parseFloat(a[c]));
        return b
    }

    function O(a) {
        for (var a = M(a), b = [], c = 0; c < a.length; c++) b.push(parseInt(a[c], 10));
        return b
    }

    function M(a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/)
    }

    function j(a, b, c) {
        return a.hasAttribute(b) ? parseInt(a.getAttribute(b), 10) : c
    }

    function P(a, b) {
        if (a ===
            void 0) {
            for (var c = "0."; c.length < b + 2;) c += "0";
            return c
        }
        b = b || 2;
        c = a.toString().split(".");
        for (c[1] = c.length > 1 ? c[1].substr(0, b) : "0"; c[1].length < b;) c[1] += "0";
        return c.join(".")
    }

    function ha(a, b) {
        var c = "";
        c += P(a.x, b) + ",";
        c += P(a.y, b) + ",";
        c += P(a.z, b);
        return c
    }
    var V = null,
        Q = null,
        K, fa = null,
        U = {}, ia = {}, pa = {}, na = {}, ka = {}, oa = {}, la = {}, ma, ya, ra, sa, xa = THREE.SmoothShading;
    f.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeName == "init_from") this.init_from =
                c.textContent
        }
        return this
    };
    h.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.name = a.getAttribute("name");
        this.type = "none";
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            switch (c.nodeName) {
            case "skin":
                this.skin = (new l).parse(c);
                this.type = c.nodeName;
                break;
            case "morph":
                this.morph = (new i).parse(c), this.type = c.nodeName
            }
        }
        return this
    };
    i.prototype.parse = function (a) {
        var b = {}, c = [],
            d;
        this.method = a.getAttribute("method");
        this.source = a.getAttribute("source").replace(/^#/, "");
        for (d =
            0; d < a.childNodes.length; d++) {
            var e = a.childNodes[d];
            if (e.nodeType == 1) switch (e.nodeName) {
            case "source":
                e = (new v).parse(e);
                b[e.id] = e;
                break;
            case "targets":
                c = this.parseInputs(e);
                break;
            default:
                console.log(e.nodeName)
            }
        }
        for (d = 0; d < c.length; d++) switch (a = c[d], e = b[a.source], a.semantic) {
        case "MORPH_TARGET":
            this.targets = e.read();
            break;
        case "MORPH_WEIGHT":
            this.weights = e.read()
        }
        return this
    };
    i.prototype.parseInputs = function (a) {
        for (var b = [], c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            if (d.nodeType == 1) switch (d.nodeName) {
            case "input":
                b.push((new G).parse(d))
            }
        }
        return b
    };
    l.prototype.parse = function (a) {
        var b = {}, c, d;
        this.source = a.getAttribute("source").replace(/^#/, "");
        this.invBindMatrices = [];
        this.joints = [];
        this.weights = [];
        for (var e = 0; e < a.childNodes.length; e++) {
            var f = a.childNodes[e];
            if (f.nodeType == 1) switch (f.nodeName) {
            case "bind_shape_matrix":
                f = I(f.textContent);
                this.bindShapeMatrix = new THREE.Matrix4;
                this.bindShapeMatrix.set(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]);
                break;
            case "source":
                f = (new v).parse(f);
                b[f.id] = f;
                break;
            case "joints":
                c =
                    f;
                break;
            case "vertex_weights":
                d = f;
                break;
            default:
                console.log(f.nodeName)
            }
        }
        this.parseJoints(c, b);
        this.parseWeights(d, b);
        return this
    };
    l.prototype.parseJoints = function (a, b) {
        for (var c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            if (d.nodeType == 1) switch (d.nodeName) {
            case "input":
                var d = (new G).parse(d),
                    e = b[d.source];
                if (d.semantic == "JOINT") this.joints = e.read();
                else if (d.semantic == "INV_BIND_MATRIX") this.invBindMatrices = e.read()
            }
        }
    };
    l.prototype.parseWeights = function (a, b) {
        for (var c, d, e = [], f = 0; f < a.childNodes.length; f++) {
            var g =
                a.childNodes[f];
            if (g.nodeType == 1) switch (g.nodeName) {
            case "input":
                e.push((new G).parse(g));
                break;
            case "v":
                c = O(g.textContent);
                break;
            case "vcount":
                d = O(g.textContent)
            }
        }
        for (f = g = 0; f < d.length; f++) {
            for (var h = d[f], i = [], j = 0; j < h; j++) {
                for (var k = {}, l = 0; l < e.length; l++) {
                    var m = e[l],
                        n = c[g + m.offset];
                    switch (m.semantic) {
                    case "JOINT":
                        k.joint = n;
                        break;
                    case "WEIGHT":
                        k.weight = b[m.source].data[n]
                    }
                }
                i.push(k);
                g += e.length
            }
            for (j = 0; j < i.length; j++) i[j].index = f;
            this.weights.push(i)
        }
    };
    k.prototype.getChildById = function (a, b) {
        for (var c =
            0; c < this.nodes.length; c++) {
            var d = this.nodes[c].getChildById(a, b);
            if (d) return d
        }
        return null
    };
    k.prototype.getChildBySid = function (a, b) {
        for (var c = 0; c < this.nodes.length; c++) {
            var d = this.nodes[c].getChildBySid(a, b);
            if (d) return d
        }
        return null
    };
    k.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.name = a.getAttribute("name");
        this.nodes = [];
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "node":
                this.nodes.push((new p).parse(c))
            }
        }
        return this
    };
    p.prototype.getChannelForTransform =
        function (a) {
            for (var b = 0; b < this.channels.length; b++) {
                var c = this.channels[b],
                    d = c.target.split("/");
                d.shift();
                var e = d.shift(),
                    f = e.indexOf(".") >= 0,
                    g = e.indexOf("(") >= 0,
                    h;
                if (f) d = e.split("."), e = d.shift(), d.shift();
                else if (g) {
                    h = e.split("(");
                    e = h.shift();
                    for (d = 0; d < h.length; d++) h[d] = parseInt(h[d].replace(/\)/, ""))
                }
                if (e == a) return c.info = {
                    sid: e,
                    dotSyntax: f,
                    arrSyntax: g,
                    arrIndices: h
                }, c
            }
            return null
    };
    p.prototype.getChildById = function (a, b) {
        if (this.id == a) return this;
        if (b)
            for (var c = 0; c < this.nodes.length; c++) {
                var d = this.nodes[c].getChildById(a,
                    b);
                if (d) return d
            }
        return null
    };
    p.prototype.getChildBySid = function (a, b) {
        if (this.sid == a) return this;
        if (b)
            for (var c = 0; c < this.nodes.length; c++) {
                var d = this.nodes[c].getChildBySid(a, b);
                if (d) return d
            }
        return null
    };
    p.prototype.getTransformBySid = function (a) {
        for (var b = 0; b < this.transforms.length; b++)
            if (this.transforms[b].sid == a) return this.transforms[b];
        return null
    };
    p.prototype.parse = function (a) {
        var b;
        this.id = a.getAttribute("id");
        this.sid = a.getAttribute("sid");
        this.name = a.getAttribute("name");
        this.type = a.getAttribute("type");
        this.type = this.type == "JOINT" ? this.type : "NODE";
        this.nodes = [];
        this.transforms = [];
        this.geometries = [];
        this.controllers = [];
        this.matrix = new THREE.Matrix4;
        for (var c = 0; c < a.childNodes.length; c++)
            if (b = a.childNodes[c], b.nodeType == 1) switch (b.nodeName) {
            case "node":
                this.nodes.push((new p).parse(b));
                break;
            case "instance_camera":
                break;
            case "instance_controller":
                this.controllers.push((new m).parse(b));
                break;
            case "instance_geometry":
                this.geometries.push((new n).parse(b));
                break;
            case "instance_light":
                break;
            case "instance_node":
                b =
                    b.getAttribute("url").replace(/^#/, "");
                (b = V.evaluate(".//dae:library_nodes//dae:node[@id='" + b + "']", V, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext()) && this.nodes.push((new p).parse(b));
                break;
            case "rotate":
            case "translate":
            case "scale":
            case "matrix":
            case "lookat":
            case "skew":
                this.transforms.push((new q).parse(b));
                break;
            case "extra":
                break;
            default:
                console.log(b.nodeName)
            }
            a = [];
        c = 1E6;
        b = -1E6;
        for (var d in pa)
            for (var e = pa[d], f = 0; f < e.channel.length; f++) {
                var g = e.channel[f],
                    h = e.sampler[f];
                d = g.target.split("/")[0];
                if (d == this.id) h.create(), g.sampler = h, c = Math.min(c, h.startTime), b = Math.max(b, h.endTime), a.push(g)
            }
        if (a.length) this.startTime = c, this.endTime = b;
        if ((this.channels = a) && this.channels.length) {
            d = 1E7;
            for (a = 0; a < this.channels.length; a++) {
                c = this.channels[a].sampler;
                for (b = 0; b < c.input.length - 1; b++) d = Math.min(d, c.input[b + 1] - c.input[b])
            }
            c = [];
            for (a = this.startTime; a < this.endTime; a += d) {
                b = a;
                for (var e = {}, i = f = void 0, f = 0; f < this.channels.length; f++) i = this.channels[f], e[i.sid] = i;
                g = new THREE.Matrix4;
                for (f = 0; f < this.transforms.length; f++)
                    if (h =
                        this.transforms[f], i = e[h.sid], i !== void 0) {
                        for (var j = i.sampler, k, i = 0; i < j.input.length - 1; i++)
                            if (j.input[i + 1] > b) {
                                k = j.output[i];
                                break
                            }
                        g = k !== void 0 ? k instanceof THREE.Matrix4 ? g.multiply(g, k) : g.multiply(g, h.matrix) : g.multiply(g, h.matrix)
                    } else g = g.multiply(g, h.matrix);
                b = g;
                c.push({
                    time: a,
                    pos: [b.n14, b.n24, b.n34],
                    rotq: [0, 0, 0, 1],
                    scl: [1, 1, 1]
                })
            }
            this.keys = c
        }
        this.updateMatrix();
        return this
    };
    p.prototype.updateMatrix = function () {
        this.matrix.identity();
        for (var a = 0; a < this.transforms.length; a++) this.matrix.multiply(this.matrix,
            this.transforms[a].matrix)
    };
    q.prototype.parse = function (a) {
        this.sid = a.getAttribute("sid");
        this.type = a.nodeName;
        this.data = I(a.textContent);
        this.updateMatrix();
        return this
    };
    q.prototype.updateMatrix = function () {
        var a = 0;
        this.matrix.identity();
        switch (this.type) {
        case "matrix":
            this.matrix.set(this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.data[5], this.data[6], this.data[7], this.data[8], this.data[9], this.data[10], this.data[11], this.data[12], this.data[13], this.data[14], this.data[15]);
            break;
        case "translate":
            this.matrix.setTranslation(this.data[0], this.data[1], this.data[2]);
            break;
        case "rotate":
            a = this.data[3] * (Math.PI / 180);
            this.matrix.setRotationAxis(new THREE.Vector3(this.data[0], this.data[1], this.data[2]), a);
            break;
        case "scale":
            this.matrix.setScale(this.data[0], this.data[1], this.data[2])
        }
        return this.matrix
    };
    m.prototype.parse = function (a) {
        this.url = a.getAttribute("url").replace(/^#/, "");
        this.skeleton = [];
        this.instance_material = [];
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "skeleton":
                this.skeleton.push(c.textContent.replace(/^#/, ""));
                break;
            case "bind_material":
                if (c = V.evaluate(".//dae:instance_material", c, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null))
                    for (var d = c.iterateNext(); d;) this.instance_material.push((new t).parse(d)), d = c.iterateNext()
            }
        }
        return this
    };
    t.prototype.parse = function (a) {
        this.symbol = a.getAttribute("symbol");
        this.target = a.getAttribute("target").replace(/^#/, "");
        return this
    };
    n.prototype.parse = function (a) {
        this.url =
            a.getAttribute("url").replace(/^#/, "");
        this.instance_material = [];
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1 && c.nodeName == "bind_material") {
                if (a = V.evaluate(".//dae:instance_material", c, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null))
                    for (b = a.iterateNext(); b;) this.instance_material.push((new t).parse(b)), b = a.iterateNext();
                break
            }
        }
        return this
    };
    o.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            switch (c.nodeName) {
            case "mesh":
                this.mesh =
                    (new s(this)).parse(c)
            }
        }
        return this
    };
    s.prototype.parse = function (a) {
        function b(a, c) {
            var d = ha(a.position);
            e[d] === void 0 && (e[d] = {
                v: a,
                index: c
            });
            return e[d]
        }
        this.primitives = [];
        var c;
        for (c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            switch (d.nodeName) {
            case "source":
                ba(d);
                break;
            case "vertices":
                this.vertices = (new E).parse(d);
                break;
            case "triangles":
                this.primitives.push((new r).parse(d));
                break;
            case "polygons":
                console.warn("polygon holes not yet supported!");
            case "polylist":
                this.primitives.push((new u).parse(d))
            }
        }
        var e = {};
        this.geometry3js = new THREE.Geometry;
        d = U[this.vertices.input.POSITION.source].data;
        for (a = c = 0; c < d.length; c += 3, a++) {
            var f = new THREE.Vertex(new THREE.Vector3(d[c], d[c + 1], d[c + 2]));
            b(f, a);
            this.geometry3js.vertices.push(f)
        }
        for (c = 0; c < this.primitives.length; c++) a = this.primitives[c], a.setVertices(this.vertices), this.handlePrimitive(a, this.geometry3js, e);
        this.geometry3js.computeCentroids();
        this.geometry3js.computeFaceNormals();
        this.geometry3js.computeVertexNormals();
        this.geometry3js.computeBoundingBox();
        return this
    };
    s.prototype.handlePrimitive = function (a, b, c) {
        var d = 0,
            e, f, g = a.p,
            h = a.inputs,
            i, j, k, l, m = 0,
            n = 3,
            o = [];
        for (e = 0; e < h.length; e++) switch (i = h[e], i.semantic) {
        case "TEXCOORD":
            o.push(i.set)
        }
        for (; d < g.length;) {
            var p = [],
                q = [],
                s = {}, r = [];
            a.vcount && (n = a.vcount[m++]);
            for (e = 0; e < n; e++)
                for (f = 0; f < h.length; f++) switch (i = h[f], l = U[i.source], j = g[d + e * h.length + i.offset], k = l.accessor.params.length, k *= j, i.semantic) {
                case "VERTEX":
                    i = ha(b.vertices[j].position);
                    p.push(c[i].index);
                    break;
                case "NORMAL":
                    q.push(new THREE.Vector3(l.data[k],
                        l.data[k + 1], l.data[k + 2]));
                    break;
                case "TEXCOORD":
                    s[i.set] === void 0 && (s[i.set] = []);
                    s[i.set].push(new THREE.UV(l.data[k], l.data[k + 1]));
                    break;
                case "COLOR":
                    r.push((new THREE.Color).setRGB(l.data[k], l.data[k + 1], l.data[k + 2]))
                }
            var t;
            n == 3 ? t = new THREE.Face3(p[0], p[1], p[2], [q[0], q[1], q[2]], r.length ? r : new THREE.Color) : n == 4 && (t = new THREE.Face4(p[0], p[1], p[2], p[3], [q[0], q[1], q[2], q[3]], r.length ? r : new THREE.Color));
            t.daeMaterial = a.material;
            b.faces.push(t);
            for (f = 0; f < o.length; f++) e = s[o[f]], b.faceVertexUvs[f].push([e[0],
                e[1], e[2]
            ]);
            d += h.length * n
        }
    };
    u.prototype = new r;
    u.prototype.constructor = u;
    r.prototype.setVertices = function (a) {
        for (var b = 0; b < this.inputs.length; b++)
            if (this.inputs[b].source == a.id) this.inputs[b].source = a.input.POSITION.source
    };
    r.prototype.parse = function (a) {
        this.inputs = [];
        this.material = a.getAttribute("material");
        this.count = j(a, "count", 0);
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            switch (c.nodeName) {
            case "input":
                this.inputs.push((new G).parse(a.childNodes[b]));
                break;
            case "vcount":
                this.vcount =
                    O(c.textContent);
                break;
            case "p":
                this.p = O(c.textContent)
            }
        }
        return this
    };
    z.prototype.parse = function (a) {
        this.params = [];
        this.source = a.getAttribute("source");
        this.count = j(a, "count", 0);
        this.stride = j(a, "stride", 0);
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeName == "param") {
                var d = {};
                d.name = c.getAttribute("name");
                d.type = c.getAttribute("type");
                this.params.push(d)
            }
        }
        return this
    };
    E.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        for (var b = 0; b < a.childNodes.length; b++)
            if (a.childNodes[b].nodeName ==
                "input") {
                var c = (new G).parse(a.childNodes[b]);
                this.input[c.semantic] = c
            }
        return this
    };
    G.prototype.parse = function (a) {
        this.semantic = a.getAttribute("semantic");
        this.source = a.getAttribute("source").replace(/^#/, "");
        this.set = j(a, "set", -1);
        this.offset = j(a, "offset", 0);
        if (this.semantic == "TEXCOORD" && this.set < 0) this.set = 0;
        return this
    };
    v.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            switch (c.nodeName) {
            case "bool_array":
                for (var d = M(c.textContent),
                        e = [], f = 0; f < d.length; f++) e.push(d[f] == "true" || d[f] == "1" ? !0 : !1);
                this.data = e;
                this.type = c.nodeName;
                break;
            case "float_array":
                this.data = I(c.textContent);
                this.type = c.nodeName;
                break;
            case "int_array":
                this.data = O(c.textContent);
                this.type = c.nodeName;
                break;
            case "IDREF_array":
            case "Name_array":
                this.data = M(c.textContent);
                this.type = c.nodeName;
                break;
            case "technique_common":
                for (d = 0; d < c.childNodes.length; d++)
                    if (c.childNodes[d].nodeName == "accessor") {
                        this.accessor = (new z).parse(c.childNodes[d]);
                        break
                    }
            }
        }
        return this
    };
    v.prototype.read = function () {
        var a = [],
            b = this.accessor.params[0];
        switch (b.type) {
        case "IDREF":
        case "Name":
        case "name":
        case "float":
            return this.data;
        case "float4x4":
            for (b = 0; b < this.data.length; b += 16) {
                var c = this.data.slice(b, b + 16),
                    d = new THREE.Matrix4;
                d.set(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]);
                a.push(d)
            }
            break;
        default:
            console.log("ColladaLoader: Source: Read dont know how to read " + b.type + ".")
        }
        return a
    };
    w.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.name = a.getAttribute("name");
        for (var b = 0; b < a.childNodes.length; b++)
            if (a.childNodes[b].nodeName == "instance_effect") {
                this.instance_effect = (new W).parse(a.childNodes[b]);
                break
            }
        return this
    };
    C.prototype.isColor = function () {
        return this.texture == null
    };
    C.prototype.isTexture = function () {
        return this.texture != null
    };
    C.prototype.parse = function (a) {
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "color":
                c = I(c.textContent);
                this.color = new THREE.Color(0);
                this.color.setRGB(c[0],
                    c[1], c[2]);
                this.color.a = c[3];
                break;
            case "texture":
                this.texture = c.getAttribute("texture"), this.texcoord = c.getAttribute("texcoord")
            }
        }
        return this
    };
    F.prototype.parse = function (a) {
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "ambient":
            case "emission":
            case "diffuse":
            case "specular":
            case "transparent":
                this[c.nodeName] = (new C).parse(c);
                break;
            case "shininess":
            case "reflectivity":
            case "transparency":
                var d;
                d = V.evaluate(".//dae:float", c, x, XPathResult.ORDERED_NODE_ITERATOR_TYPE,
                    null);
                for (var e = d.iterateNext(), f = []; e;) f.push(e), e = d.iterateNext();
                d = f;
                d.length > 0 && (this[c.nodeName] = parseFloat(d[0].textContent))
            }
        }
        this.create();
        return this
    };
    F.prototype.create = function () {
        var a = {}, b = this.transparency !== void 0 && this.transparency < 1,
            c;
        for (c in this) switch (c) {
        case "ambient":
        case "emission":
        case "diffuse":
        case "specular":
            var d = this[c];
            if (d instanceof C)
                if (d.isTexture()) {
                    if (this.effect.sampler && this.effect.surface && this.effect.sampler.source == this.effect.surface.sid && (d = ia[this.effect.surface.init_from])) a.map =
                        THREE.ImageUtils.loadTexture(ya + d.init_from), a.map.wrapS = THREE.RepeatWrapping, a.map.wrapT = THREE.RepeatWrapping, a.map.repeat.x = 1, a.map.repeat.y = -1
                } else c == "diffuse" ? a.color = d.color.getHex() : b || (a[c] = d.color.getHex());
            break;
        case "shininess":
        case "reflectivity":
            a[c] = this[c];
            break;
        case "transparency":
            if (b) a.transparent = !0, a.opacity = this[c], b = !0
        }
        a.shading = xa;
        return this.material = new THREE.MeshLambertMaterial(a)
    };
    B.prototype.parse = function (a) {
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "init_from":
                this.init_from = c.textContent;
                break;
            case "format":
                this.format = c.textContent;
                break;
            default:
                console.log("unhandled Surface prop: " + c.nodeName)
            }
        }
        return this
    };
    L.prototype.parse = function (a) {
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "source":
                this.source = c.textContent;
                break;
            case "minfilter":
                this.minfilter = c.textContent;
                break;
            case "magfilter":
                this.magfilter = c.textContent;
                break;
            case "mipfilter":
                this.mipfilter =
                    c.textContent;
                break;
            case "wrap_s":
                this.wrap_s = c.textContent;
                break;
            case "wrap_t":
                this.wrap_t = c.textContent;
                break;
            default:
                console.log("unhandled Sampler2D prop: " + c.nodeName)
            }
        }
        return this
    };
    J.prototype.create = function () {
        if (this.shader == null) return null
    };
    J.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.name = a.getAttribute("name");
        this.shader = null;
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "profile_COMMON":
                this.parseTechnique(this.parseProfileCOMMON(c))
            }
        }
        return this
    };
    J.prototype.parseNewparam = function (a) {
        for (var b = a.getAttribute("sid"), c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            if (d.nodeType == 1) switch (d.nodeName) {
            case "surface":
                this.surface = (new B(this)).parse(d);
                this.surface.sid = b;
                break;
            case "sampler2D":
                this.sampler = (new L(this)).parse(d);
                this.sampler.sid = b;
                break;
            case "extra":
                break;
            default:
                console.log(d.nodeName)
            }
        }
    };
    J.prototype.parseProfileCOMMON = function (a) {
        for (var b, c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            if (d.nodeType == 1) switch (d.nodeName) {
            case "profile_COMMON":
                this.parseProfileCOMMON(d);
                break;
            case "technique":
                b = d;
                break;
            case "newparam":
                this.parseNewparam(d);
                break;
            case "extra":
                break;
            default:
                console.log(d.nodeName)
            }
        }
        return b
    };
    J.prototype.parseTechnique = function (a) {
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "lambert":
            case "blinn":
            case "phong":
                this.shader = (new F(c.nodeName, this)).parse(c)
            }
        }
    };
    W.prototype.parse = function (a) {
        this.url = a.getAttribute("url").replace(/^#/, "");
        return this
    };
    X.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.name = a.getAttribute("name");
        this.source = {};
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "source":
                c = (new v).parse(c);
                this.source[c.id] = c;
                break;
            case "sampler":
                this.sampler.push((new ea(this)).parse(c));
                break;
            case "channel":
                this.channel.push((new T(this)).parse(c))
            }
        }
        return this
    };
    T.prototype.parse = function (a) {
        this.source = a.getAttribute("source").replace(/^#/, "");
        this.target = a.getAttribute("target");
        var b = this.target.split("/");
        b.shift();
        var a =
            b.shift(),
            c = a.indexOf(".") >= 0,
            d = a.indexOf("(") >= 0,
            e, f;
        if (c) b = a.split("."), a = b.shift(), f = b.shift();
        else if (d) {
            e = a.split("(");
            a = e.shift();
            for (b = 0; b < e.length; b++) e[b] = parseInt(e[b].replace(/\)/, ""))
        }
        this.sid = a;
        this.dotSyntax = c;
        this.arrSyntax = d;
        this.arrIndices = e;
        this.member = f;
        return this
    };
    ea.prototype.parse = function (a) {
        this.id = a.getAttribute("id");
        this.inputs = [];
        for (var b = 0; b < a.childNodes.length; b++) {
            var c = a.childNodes[b];
            if (c.nodeType == 1) switch (c.nodeName) {
            case "input":
                this.inputs.push((new G).parse(c))
            }
        }
        return this
    };
    ea.prototype.create = function () {
        for (var a = 0; a < this.inputs.length; a++) {
            var b = this.inputs[a],
                c = this.animation.source[b.source];
            switch (b.semantic) {
            case "INPUT":
                this.input = c.read();
                break;
            case "OUTPUT":
                this.output = c.read();
                break;
            case "INTERPOLATION":
                this.interpolation = c.read();
                break;
            case "IN_TANGENT":
                break;
            case "OUT_TANGENT":
                break;
            default:
                console.log(b.semantic)
            }
        }
        this.duration = this.endTime = this.startTime = 0;
        if (this.input.length) {
            this.startTime = 1E8;
            this.endTime = -1E8;
            for (a = 0; a < this.input.length; a++) this.startTime =
                Math.min(this.startTime, this.input[a]), this.endTime = Math.max(this.endTime, this.input[a]);
            this.duration = this.endTime - this.startTime
        }
    };
    return {
        load: function (b, c) {
            if (document.implementation && document.implementation.createDocument) {
                document.implementation.createDocument("http://www.collada.org/2005/11/COLLADASchema", "COLLADA", null);
                b += "?rnd=" + Math.random();
                var d = new XMLHttpRequest;
                d.overrideMimeType && d.overrideMimeType("text/xml");
                d.onreadystatechange = function () {
                    if (d.readyState == 4 && (d.status == 0 || d.status ==
                        200)) fa = c, a(d.responseXML, void 0, b)
                };
                d.open("GET", b, !0);
                d.send(null)
            } else alert("Don't know how to parse XML!")
        },
        parse: a,
        setPreferredShading: function (a) {
            xa = a
        },
        applySkin: g,
        geometries: ka
    }
};
THREE.JSONLoader = function (a) {
    THREE.Loader.call(this, a)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function (a, c, b) {
    if (a instanceof Object) console.warn("DEPRECATED: JSONLoader( parameters ) is now JSONLoader( url, callback, texturePath )."), b = a, a = b.model, c = b.callback, b = b.texture_path;
    b = b ? b : this.extractUrlbase(a);
    this.onLoadStart();
    this.loadAjaxJSON(this, a, c, b)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function (a, c, b, d, g) {
    var e = new XMLHttpRequest,
        f = 0;
    e.onreadystatechange = function () {
        if (e.readyState == 4)
            if (e.status == 200 || e.status == 0) try {
                var h = JSON.parse(e.responseText);
                a.createModel(h, b, d);
                a.onLoadComplete()
            } catch (i) {
                
            } else console.error("Couldn't load ");
            else e.readyState == 3 ? g && (f == 0 && (f = e.getResponseHeader("Content-Length")), g({
                total: f,
                loaded: e.responseText.length
            })) :
                e.readyState == 2 && (f = e.getResponseHeader("Content-Length"))
    };
    e.open("GET", c, !0);
    e.overrideMimeType("text/plain; charset=x-user-defined");
    e.setRequestHeader("Content-Type", "text/plain");
    e.send(null)
};
THREE.JSONLoader.prototype.createModel = function (a, c, b) {
    var d = new THREE.Geometry,
        g = a.scale !== void 0 ? 1 / a.scale : 1;
    this.initMaterials(d, a.materials, b);
    (function (b) {
        if (a.metadata === void 0 || a.metadata.formatVersion === void 0 || a.metadata.formatVersion !== 3) console.error("Deprecated file format.");
        else {
            var c, g, i, l, k, p, q, m, t, n, o, s, u, r, z = a.faces;
            p = a.vertices;
            var E = a.normals,
                G = a.colors,
                v = 0;
            for (c = 0; c < a.uvs.length; c++) a.uvs[c].length && v++;
            for (c = 0; c < v; c++) d.faceUvs[c] = [], d.faceVertexUvs[c] = [];
            l = 0;
            for (k = p.length; l <
                k;) q = new THREE.Vertex, q.position.x = p[l++] * b, q.position.y = p[l++] * b, q.position.z = p[l++] * b, d.vertices.push(q);
            l = 0;
            for (k = z.length; l < k;) {
                b = z[l++];
                p = b & 1;
                i = b & 2;
                c = b & 4;
                g = b & 8;
                m = b & 16;
                q = b & 32;
                n = b & 64;
                b &= 128;
                p ? (o = new THREE.Face4, o.a = z[l++], o.b = z[l++], o.c = z[l++], o.d = z[l++], p = 4) : (o = new THREE.Face3, o.a = z[l++], o.b = z[l++], o.c = z[l++], p = 3);
                if (i) i = z[l++], o.materialIndex = i;
                i = d.faces.length;
                if (c)
                    for (c = 0; c < v; c++) s = a.uvs[c], t = z[l++], r = s[t * 2], t = s[t * 2 + 1], d.faceUvs[c][i] = new THREE.UV(r, t);
                if (g)
                    for (c = 0; c < v; c++) {
                        s = a.uvs[c];
                        u = [];
                        for (g = 0; g < p; g++) t = z[l++], r = s[t * 2], t = s[t * 2 + 1], u[g] = new THREE.UV(r, t);
                        d.faceVertexUvs[c][i] = u
                    }
                if (m) m = z[l++] * 3, g = new THREE.Vector3, g.x = E[m++], g.y = E[m++], g.z = E[m], o.normal = g;
                if (q)
                    for (c = 0; c < p; c++) m = z[l++] * 3, g = new THREE.Vector3, g.x = E[m++], g.y = E[m++], g.z = E[m], o.vertexNormals.push(g);
                if (n) q = z[l++], q = new THREE.Color(G[q]), o.color = q;
                if (b)
                    for (c = 0; c < p; c++) q = z[l++], q = new THREE.Color(G[q]), o.vertexColors.push(q);
                d.faces.push(o)
            }
        }
    })(g);
    (function () {
        var b, c, g, i;
        if (a.skinWeights) {
            b = 0;
            for (c = a.skinWeights.length; b < c; b +=
                2) g = a.skinWeights[b], i = a.skinWeights[b + 1], d.skinWeights.push(new THREE.Vector4(g, i, 0, 0))
        }
        if (a.skinIndices) {
            b = 0;
            for (c = a.skinIndices.length; b < c; b += 2) g = a.skinIndices[b], i = a.skinIndices[b + 1], d.skinIndices.push(new THREE.Vector4(g, i, 0, 0))
        }
        d.bones = a.bones;
        d.animation = a.animation
    })();
    (function (b) {
        if (a.morphTargets !== void 0) {
            var c, g, i, l, k, p, q, m, t;
            c = 0;
            for (g = a.morphTargets.length; c < g; c++) {
                d.morphTargets[c] = {};
                d.morphTargets[c].name = a.morphTargets[c].name;
                d.morphTargets[c].vertices = [];
                m = d.morphTargets[c].vertices;
                t = a.morphTargets[c].vertices;
                i = 0;
                for (l = t.length; i < l; i += 3) k = t[i] * b, p = t[i + 1] * b, q = t[i + 2] * b, m.push(new THREE.Vertex(new THREE.Vector3(k, p, q)))
            }
        }
        if (a.morphColors !== void 0) {
            c = 0;
            for (g = a.morphColors.length; c < g; c++) {
                d.morphColors[c] = {};
                d.morphColors[c].name = a.morphColors[c].name;
                d.morphColors[c].colors = [];
                l = d.morphColors[c].colors;
                k = a.morphColors[c].colors;
                b = 0;
                for (i = k.length; b < i; b += 3) p = new THREE.Color(16755200), p.setRGB(k[b], k[b + 1], k[b + 2]), l.push(p)
            }
        }
    })(g);
    d.computeCentroids();
    d.computeFaceNormals();
    this.hasNormals(d) &&
        d.computeTangents();
    c(d)
};
THREE.SceneLoader = function () {
    this.onLoadStart = function () {};
    this.onLoadProgress = function () {};
    this.onLoadComplete = function () {};
    this.callbackSync = function () {};
    this.callbackProgress = function () {}
};
THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;
THREE.SceneLoader.prototype.load = function (a, c) {
    var b = this,
        d = new XMLHttpRequest;
    d.onreadystatechange = function () {
        if (d.readyState == 4)
            if (d.status == 200 || d.status == 0) try {
                var g = JSON.parse(d.responseText);
                g.metadata === void 0 || g.metadata.formatVersion === void 0 || g.metadata.formatVersion !== 3 ? console.error("Deprecated file format.") : b.createScene(g, c, a)
            } catch (e) {
                console.error(e), console.warn("DEPRECATED: [" + a + "] seems to be using old model format")
            } else console.error("Couldn't load [" + a + "] [" + d.status + "]")
    };
    d.open("GET", a, !0);
    d.overrideMimeType("text/plain; charset=x-user-defined");
    d.setRequestHeader("Content-Type", "text/plain");
    d.send(null)
};
THREE.SceneLoader.prototype.createScene = function (a, c, b) {
    function d(a, b) {
        return b == "relativeToHTML" ? a : l + "/" + a
    }

    function g() {
        var a;
        for (q in J.objects)
            if (!x.objects[q])
                if (s = J.objects[q], s.geometry !== void 0) {
                    if (C = x.geometries[s.geometry]) {
                        a = !1;
                        for (O = 0; O < s.materials.length; O++) L = x.materials[s.materials[O]], a = L instanceof THREE.ShaderMaterial;
                        a && C.computeTangents();
                        z = s.position;
                        E = s.rotation;
                        G = s.quaternion;
                        v = s.scale;
                        G = 0;
                        L.length == 0 && (L = new THREE.MeshFaceMaterial);
                        L.length > 1 && (L = new THREE.MeshFaceMaterial);
                        a = new THREE.Mesh(C, L);
                        a.name = q;
                        a.position.set(z[0], z[1], z[2]);
                        G ? (a.quaternion.set(G[0], G[1], G[2], G[3]), a.useQuaternion = !0) : a.rotation.set(E[0], E[1], E[2]);
                        a.scale.set(v[0], v[1], v[2]);
                        a.visible = s.visible;
                        x.scene.add(a);
                        x.objects[q] = a;
                        if (s.meshCollider) {
                            var b = THREE.CollisionUtils.MeshColliderWBox(a);
                            x.scene.collisions.colliders.push(b)
                        }
                        if (s.castsShadow) b = new THREE.ShadowVolume(C), x.scene.add(b), b.position = a.position, b.rotation = a.rotation, b.scale = a.scale;
                        s.trigger && s.trigger.toLowerCase() != "none" && (b = {
                            type: s.trigger,
                            object: s
                        }, x.triggers[a.name] = b)
                    }
                } else z = s.position, E = s.rotation, G = s.quaternion, v = s.scale, G = 0, a = new THREE.Object3D, a.name = q, a.position.set(z[0], z[1], z[2]), G ? (a.quaternion.set(G[0], G[1], G[2], G[3]), a.useQuaternion = !0) : a.rotation.set(E[0], E[1], E[2]), a.scale.set(v[0], v[1], v[2]), a.visible = s.visible !== void 0 ? s.visible : !1, x.scene.add(a), x.objects[q] = a, x.empties[q] = a, s.trigger && s.trigger.toLowerCase() != "none" && (b = {
                    type: s.trigger,
                    object: s
                }, x.triggers[a.name] = b)
    }

    function e(a) {
        return function (b) {
            x.geometries[a] =
                b;
            g();
            X -= 1;
            i.onLoadComplete();
            h()
        }
    }

    function f(a) {
        return function (b) {
            x.geometries[a] = b
        }
    }

    function h() {
        i.callbackProgress({
            totalModels: ea,
            totalTextures: ba,
            loadedModels: ea - X,
            loadedTextures: ba - T
        }, x);
        i.onLoadProgress();
        X == 0 && T == 0 && c(x)
    }
    var i = this,
        l = THREE.Loader.prototype.extractUrlbase(b),
        k, p, q, m, t, n, o, s, u, r, z, E, G, v, w, C, F, B, L, J, W, X, T, ea, ba, x;
    J = a;
    b = new THREE.BinaryLoader;
    W = new THREE.JSONLoader;
    T = X = 0;
    x = {
        scene: new THREE.Scene,
        geometries: {},
        materials: {},
        textures: {},
        objects: {},
        cameras: {},
        lights: {},
        fogs: {},
        triggers: {},
        empties: {}
    };
    a = !1;
    for (q in J.objects)
        if (s = J.objects[q], s.meshCollider) {
            a = !0;
            break
        }
    if (a) x.scene.collisions = new THREE.CollisionSystem;
    if (J.transform) {
        a = J.transform.position;
        u = J.transform.rotation;
        var I = J.transform.scale;
        a && x.scene.position.set(a[0], a[1], a[2]);
        u && x.scene.rotation.set(u[0], u[1], u[2]);
        I && x.scene.scale.set(I[0], I[1], I[2]);
        (a || u || I) && x.scene.updateMatrix()
    }
    a = function () {
        T -= 1;
        h();
        i.onLoadComplete()
    };
    for (t in J.cameras) u = J.cameras[t], u.type == "perspective" ? F = new THREE.PerspectiveCamera(u.fov,
        u.aspect, u.near, u.far) : u.type == "ortho" && (F = new THREE.OrthographicCamera(u.left, u.right, u.top, u.bottom, u.near, u.far)), z = u.position, u = u.target, F.position.set(z[0], z[1], z[2]), F.target = new THREE.Vector3(u[0], u[1], u[2]), x.cameras[t] = F;
    for (m in J.lights) u = J.lights[m], t = u.color !== void 0 ? u.color : 16777215, F = u.intensity !== void 0 ? u.intensity : 1, u.type == "directional" ? (z = u.direction, r = new THREE.DirectionalLight(t, F), r.position.set(z[0], z[1], z[2]), r.position.normalize()) : u.type == "point" ? (z = u.position, r = u.distance,
        r = new THREE.PointLight(t, F, r), r.position.set(z[0], z[1], z[2])) : u.type == "ambient" && (r = new THREE.AmbientLight(t)), x.scene.add(r), x.lights[m] = r;
    for (n in J.fogs) m = J.fogs[n], m.type == "linear" ? B = new THREE.Fog(0, m.near, m.far) : m.type == "exp2" && (B = new THREE.FogExp2(0, m.density)), u = m.color, B.color.setRGB(u[0], u[1], u[2]), x.fogs[n] = B;
    if (x.cameras && J.defaults.camera) x.currentCamera = x.cameras[J.defaults.camera];
    if (x.fogs && J.defaults.fog) x.scene.fog = x.fogs[J.defaults.fog];
    u = J.defaults.bgcolor;
    x.bgColor = new THREE.Color;
    x.bgColor.setRGB(u[0], u[1], u[2]);
    x.bgColorAlpha = J.defaults.bgalpha;
    for (k in J.geometries)
        if (n = J.geometries[k], n.type == "bin_mesh" || n.type == "ascii_mesh") X += 1, i.onLoadStart();
    ea = X;
    for (k in J.geometries) n = J.geometries[k], n.type == "cube" ? (C = new THREE.CubeGeometry(n.width, n.height, n.depth, n.segmentsWidth, n.segmentsHeight, n.segmentsDepth, null, n.flipped, n.sides), x.geometries[k] = C) : n.type == "plane" ? (C = new THREE.PlaneGeometry(n.width, n.height, n.segmentsWidth, n.segmentsHeight), x.geometries[k] = C) : n.type == "sphere" ?
        (C = new THREE.SphereGeometry(n.radius, n.segmentsWidth, n.segmentsHeight), x.geometries[k] = C) : n.type == "cylinder" ? (C = new THREE.CylinderGeometry(n.topRad, n.botRad, n.height, n.radSegs, n.heightSegs), x.geometries[k] = C) : n.type == "torus" ? (C = new THREE.TorusGeometry(n.radius, n.tube, n.segmentsR, n.segmentsT), x.geometries[k] = C) : n.type == "icosahedron" ? (C = new THREE.IcosahedronGeometry(n.subdivisions), x.geometries[k] = C) : n.type == "bin_mesh" ? b.load(d(n.url, J.urlBaseType), e(k)) : n.type == "ascii_mesh" ? W.load(d(n.url, J.urlBaseType),
        e(k)) : n.type == "embedded_mesh" && (n = J.embeds[n.id]) && W.createModel(n, f(k), "");
    for (o in J.textures)
        if (k = J.textures[o], k.url instanceof Array) {
            T += k.url.length;
            for (n = 0; n < k.url.length; n++) i.onLoadStart()
        } else T += 1, i.onLoadStart();
    ba = T;
    for (o in J.textures) {
        k = J.textures[o];
        if (k.mapping != void 0 && THREE[k.mapping] != void 0) k.mapping = new THREE[k.mapping];
        if (k.url instanceof Array) {
            n = [];
            for (var O = 0; O < k.url.length; O++) n[O] = d(k.url[O], J.urlBaseType);
            n = THREE.ImageUtils.loadTextureCube(n, k.mapping, a)
        } else {
            n = THREE.ImageUtils.loadTexture(d(k.url,
                J.urlBaseType), k.mapping, a);
            if (THREE[k.minFilter] != void 0) n.minFilter = THREE[k.minFilter];
            if (THREE[k.magFilter] != void 0) n.magFilter = THREE[k.magFilter];
            if (k.repeat) {
                n.repeat.set(k.repeat[0], k.repeat[1]);
                if (k.repeat[0] != 1) n.wrapS = THREE.RepeatWrapping;
                if (k.repeat[1] != 1) n.wrapT = THREE.RepeatWrapping
            }
            k.offset && n.offset.set(k.offset[0], k.offset[1]);
            if (k.wrap) {
                B = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                };
                if (B[k.wrap[0]] !== void 0) n.wrapS = B[k.wrap[0]];
                if (B[k.wrap[1]] !== void 0) n.wrapT =
                    B[k.wrap[1]]
            }
        }
        x.textures[o] = n
    }
    for (p in J.materials) {
        o = J.materials[p];
        for (w in o.parameters)
            if (w == "envMap" || w == "map" || w == "lightMap") o.parameters[w] = x.textures[o.parameters[w]];
            else if (w == "shading") o.parameters[w] = o.parameters[w] == "flat" ? THREE.FlatShading : THREE.SmoothShading;
        else if (w == "blending") o.parameters[w] = THREE[o.parameters[w]] ? THREE[o.parameters[w]] : THREE.NormalBlending;
        else if (w == "combine") o.parameters[w] = o.parameters[w] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation;
        else if (w ==
            "vertexColors")
            if (o.parameters[w] == "face") o.parameters[w] = THREE.FaceColors;
            else if (o.parameters[w]) o.parameters[w] = THREE.VertexColors;
        if (o.parameters.opacity !== void 0 && o.parameters.opacity < 1) o.parameters.transparent = !0;
        if (o.parameters.normalMap) {
            k = THREE.ShaderUtils.lib.normal;
            a = THREE.UniformsUtils.clone(k.uniforms);
            n = o.parameters.color;
            B = o.parameters.specular;
            b = o.parameters.ambient;
            W = o.parameters.shininess;
            a.tNormal.texture = x.textures[o.parameters.normalMap];
            if (o.parameters.normalMapFactor) a.uNormalScale.value =
                o.parameters.normalMapFactor;
            if (o.parameters.map) a.tDiffuse.texture = o.parameters.map, a.enableDiffuse.value = !0;
            if (o.parameters.lightMap) a.tAO.texture = o.parameters.lightMap, a.enableAO.value = !0;
            if (o.parameters.specularMap) a.tSpecular.texture = x.textures[o.parameters.specularMap], a.enableSpecular.value = !0;
            a.uDiffuseColor.value.setHex(n);
            a.uSpecularColor.value.setHex(B);
            a.uAmbientColor.value.setHex(b);
            a.uShininess.value = W;
            if (o.parameters.opacity) a.uOpacity.value = o.parameters.opacity;
            o = new THREE.ShaderMaterial({
                fragmentShader: k.fragmentShader,
                vertexShader: k.vertexShader,
                uniforms: a,
                lights: !0,
                fog: !0
            })
        } else o = new THREE[o.type](o.parameters);
        x.materials[p] = o
    }
    g();
    i.callbackSync(x);
    h()
};
THREE.UTF8Loader = function () {};
THREE.UTF8Loader.prototype = new THREE.UTF8Loader;
THREE.UTF8Loader.prototype.constructor = THREE.UTF8Loader;
THREE.UTF8Loader.prototype.load = function (a, c, b) {
    if (a instanceof Object) console.warn("DEPRECATED: UTF8Loader( parameters ) is now UTF8Loader( url, callback, metaData )."), b = a, a = b.model, c = b.callback, b = {
        scale: b.scale,
        offsetX: b.offsetX,
        offsetY: b.offsetY,
        offsetZ: b.offsetZ
    };
    var d = new XMLHttpRequest,
        g = b.scale !== void 0 ? b.scale : 1,
        e = b.offsetX !== void 0 ? b.offsetX : 0,
        f = b.offsetY !== void 0 ? b.offsetY : 0,
        h = b.offsetZ !== void 0 ? b.offsetZ : 0;
    d.onreadystatechange = function () {
        d.readyState == 4 ? d.status == 200 || d.status == 0 ? THREE.UTF8Loader.prototype.createModel(d.responseText,
            c, g, e, f, h) : alert("Couldn't load [" + a + "] [" + d.status + "]") : d.readyState != 3 && d.readyState == 2 && d.getResponseHeader("Content-Length")
    };
    d.open("GET", a, !0);
    d.send(null)
};
THREE.UTF8Loader.prototype.decompressMesh = function (a) {
    var c = a.charCodeAt(0);
    c >= 57344 && (c -= 2048);
    c++;
    for (var b = new Float32Array(8 * c), d = 1, g = 0; g < 8; g++) {
        for (var e = 0, f = 0; f < c; ++f) {
            var h = a.charCodeAt(f + d);
            e += h >> 1 ^ -(h & 1);
            b[8 * f + g] = e
        }
        d += c
    }
    c = a.length - d;
    e = new Uint16Array(c);
    for (g = f = 0; g < c; g++) h = a.charCodeAt(g + d), e[g] = f - h, h == 0 && f++;
    return [b, e]
};
THREE.UTF8Loader.prototype.createModel = function (a, c, b, d, g, e) {
    var f = function () {
        var c = this;
        c.materials = [];
        THREE.Geometry.call(this);
        var f = THREE.UTF8Loader.prototype.decompressMesh(a),
            l = [],
            k = [];
        (function (a, f, i) {
            for (var k, l, o, s = a.length; i < s; i += f) k = a[i], l = a[i + 1], o = a[i + 2], k = k / 16383 * b, l = l / 16383 * b, o = o / 16383 * b, k += d, l += g, o += e, c.vertices.push(new THREE.Vertex(new THREE.Vector3(k, l, o)))
        })(f[0], 8, 0);
        (function (a, b, c) {
            for (var d, e, f = a.length; c < f; c += b) d = a[c], e = a[c + 1], d /= 1023, e /= 1023, k.push(d, 1 - e)
        })(f[0], 8, 3);
        (function (a,
            b, c) {
            for (var d, e, f, g = a.length; c < g; c += b) d = a[c], e = a[c + 1], f = a[c + 2], d = (d - 512) / 511, e = (e - 512) / 511, f = (f - 512) / 511, l.push(d, e, f)
        })(f[0], 8, 5);
        (function (a) {
            var b, d, e, f, g, i, u, r, z, E = a.length;
            for (b = 0; b < E; b += 3) {
                d = a[b];
                e = a[b + 1];
                f = a[b + 2];
                g = c;
                r = d;
                z = e;
                i = f;
                u = d;
                var G = e,
                    v = f,
                    w = g.materials[0],
                    C = l[G * 3],
                    F = l[G * 3 + 1],
                    G = l[G * 3 + 2],
                    B = l[v * 3],
                    L = l[v * 3 + 1],
                    v = l[v * 3 + 2];
                u = new THREE.Vector3(l[u * 3], l[u * 3 + 1], l[u * 3 + 2]);
                G = new THREE.Vector3(C, F, G);
                v = new THREE.Vector3(B, L, v);
                g.faces.push(new THREE.Face3(r, z, i, [u, G, v], null, w));
                g = k[d * 2];
                d = k[d * 2 +
                    1];
                i = k[e * 2];
                u = k[e * 2 + 1];
                r = k[f * 2];
                z = k[f * 2 + 1];
                f = c.faceVertexUvs[0];
                e = i;
                i = u;
                u = [];
                u.push(new THREE.UV(g, d));
                u.push(new THREE.UV(e, i));
                u.push(new THREE.UV(r, z));
                f.push(u)
            }
        })(f[1]);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    f.prototype = new THREE.Geometry;
    f.prototype.constructor = f;
    c(new f)
};
THREE.Axes = function () {
    THREE.Object3D.call(this);
    var a = new THREE.Geometry;
    a.vertices.push(new THREE.Vertex);
    a.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 100, 0)));
    var c = new THREE.CylinderGeometry(0, 5, 25, 5, 1),
        b = new THREE.Line(a, new THREE.LineBasicMaterial({
            color: 16711680
        }));
    b.rotation.z = -Math.PI / 2;
    this.add(b);
    b = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
        color: 16711680
    }));
    b.position.x = 100;
    b.rotation.z = -Math.PI / 2;
    this.add(b);
    b = new THREE.Line(a, new THREE.LineBasicMaterial({
        color: 65280
    }));
    this.add(b);
    b = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
        color: 65280
    }));
    b.position.y = 100;
    this.add(b);
    b = new THREE.Line(a, new THREE.LineBasicMaterial({
        color: 255
    }));
    b.rotation.x = Math.PI / 2;
    this.add(b);
    b = new THREE.Mesh(c, new THREE.MeshBasicMaterial({
        color: 255
    }));
    b.position.z = 100;
    b.rotation.x = Math.PI / 2;
    this.add(b)
};
THREE.Axes.prototype = new THREE.Object3D;
THREE.Axes.prototype.constructor = THREE.Axes;
THREE.MarchingCubes = function (a, c) {
    THREE.Object3D.call(this);
    this.materials = c instanceof Array ? c : [c];
    this.init = function (a) {
        this.isolation = 80;
        this.size = a;
        this.size2 = this.size * this.size;
        this.size3 = this.size2 * this.size;
        this.halfsize = this.size / 2;
        this.delta = 2 / this.size;
        this.yd = this.size;
        this.zd = this.size2;
        this.field = new Float32Array(this.size3);
        this.normal_cache = new Float32Array(this.size3 * 3);
        this.vlist = new Float32Array(36);
        this.nlist = new Float32Array(36);
        this.firstDraw = !0;
        this.maxCount = 4096;
        this.count =
            0;
        this.hasNormal = this.hasPos = !1;
        this.positionArray = new Float32Array(this.maxCount * 3);
        this.normalArray = new Float32Array(this.maxCount * 3)
    };
    this.lerp = function (a, c, g) {
        return a + (c - a) * g
    };
    this.VIntX = function (a, c, g, e, f, h, i, l, k, p) {
        f = (f - k) / (p - k);
        k = this.normal_cache;
        c[e] = h + f * this.delta;
        c[e + 1] = i;
        c[e + 2] = l;
        g[e] = this.lerp(k[a], k[a + 3], f);
        g[e + 1] = this.lerp(k[a + 1], k[a + 4], f);
        g[e + 2] = this.lerp(k[a + 2], k[a + 5], f)
    };
    this.VIntY = function (a, c, g, e, f, h, i, l, k, p) {
        f = (f - k) / (p - k);
        k = this.normal_cache;
        c[e] = h;
        c[e + 1] = i + f * this.delta;
        c[e +
            2] = l;
        c = a + this.yd * 3;
        g[e] = this.lerp(k[a], k[c], f);
        g[e + 1] = this.lerp(k[a + 1], k[c + 1], f);
        g[e + 2] = this.lerp(k[a + 2], k[c + 2], f)
    };
    this.VIntZ = function (a, c, g, e, f, h, i, l, k, p) {
        f = (f - k) / (p - k);
        k = this.normal_cache;
        c[e] = h;
        c[e + 1] = i;
        c[e + 2] = l + f * this.delta;
        c = a + this.zd * 3;
        g[e] = this.lerp(k[a], k[c], f);
        g[e + 1] = this.lerp(k[a + 1], k[c + 1], f);
        g[e + 2] = this.lerp(k[a + 2], k[c + 2], f)
    };
    this.compNorm = function (a) {
        var c = a * 3;
        this.normal_cache[c] === 0 && (this.normal_cache[c] = this.field[a - 1] - this.field[a + 1], this.normal_cache[c + 1] = this.field[a - this.yd] -
            this.field[a + this.yd], this.normal_cache[c + 2] = this.field[a - this.zd] - this.field[a + this.zd])
    };
    this.polygonize = function (a, c, g, e, f, h) {
        var i = e + 1,
            l = e + this.yd,
            k = e + this.zd,
            p = i + this.yd,
            q = i + this.zd,
            m = e + this.yd + this.zd,
            t = i + this.yd + this.zd,
            n = 0,
            o = this.field[e],
            s = this.field[i],
            u = this.field[l],
            r = this.field[p],
            z = this.field[k],
            E = this.field[q],
            G = this.field[m],
            v = this.field[t];
        o < f && (n |= 1);
        s < f && (n |= 2);
        u < f && (n |= 8);
        r < f && (n |= 4);
        z < f && (n |= 16);
        E < f && (n |= 32);
        G < f && (n |= 128);
        v < f && (n |= 64);
        var w = THREE.edgeTable[n];
        if (w === 0) return 0;
        var C = this.delta,
            F = a + C,
            B = c + C,
            C = g + C;
        w & 1 && (this.compNorm(e), this.compNorm(i), this.VIntX(e * 3, this.vlist, this.nlist, 0, f, a, c, g, o, s));
        w & 2 && (this.compNorm(i), this.compNorm(p), this.VIntY(i * 3, this.vlist, this.nlist, 3, f, F, c, g, s, r));
        w & 4 && (this.compNorm(l), this.compNorm(p), this.VIntX(l * 3, this.vlist, this.nlist, 6, f, a, B, g, u, r));
        w & 8 && (this.compNorm(e), this.compNorm(l), this.VIntY(e * 3, this.vlist, this.nlist, 9, f, a, c, g, o, u));
        w & 16 && (this.compNorm(k), this.compNorm(q), this.VIntX(k * 3, this.vlist, this.nlist, 12, f, a, c, C, z, E));
        w & 32 && (this.compNorm(q), this.compNorm(t), this.VIntY(q * 3, this.vlist, this.nlist, 15, f, F, c, C, E, v));
        w & 64 && (this.compNorm(m), this.compNorm(t), this.VIntX(m * 3, this.vlist, this.nlist, 18, f, a, B, C, G, v));
        w & 128 && (this.compNorm(k), this.compNorm(m), this.VIntY(k * 3, this.vlist, this.nlist, 21, f, a, c, C, z, G));
        w & 256 && (this.compNorm(e), this.compNorm(k), this.VIntZ(e * 3, this.vlist, this.nlist, 24, f, a, c, g, o, z));
        w & 512 && (this.compNorm(i), this.compNorm(q), this.VIntZ(i * 3, this.vlist, this.nlist, 27, f, F, c, g, s, E));
        w & 1024 && (this.compNorm(p),
            this.compNorm(t), this.VIntZ(p * 3, this.vlist, this.nlist, 30, f, F, B, g, r, v));
        w & 2048 && (this.compNorm(l), this.compNorm(m), this.VIntZ(l * 3, this.vlist, this.nlist, 33, f, a, B, g, u, G));
        n <<= 4;
        for (f = e = 0; THREE.triTable[n + f] != -1;) a = n + f, c = a + 1, g = a + 2, this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[a], 3 * THREE.triTable[c], 3 * THREE.triTable[g], h), f += 3, e++;
        return e
    };
    this.posnormtriv = function (a, c, g, e, f, h) {
        var i = this.count * 3;
        this.positionArray[i] = a[g];
        this.positionArray[i + 1] = a[g + 1];
        this.positionArray[i + 2] = a[g + 2];
        this.positionArray[i +
            3] = a[e];
        this.positionArray[i + 4] = a[e + 1];
        this.positionArray[i + 5] = a[e + 2];
        this.positionArray[i + 6] = a[f];
        this.positionArray[i + 7] = a[f + 1];
        this.positionArray[i + 8] = a[f + 2];
        this.normalArray[i] = c[g];
        this.normalArray[i + 1] = c[g + 1];
        this.normalArray[i + 2] = c[g + 2];
        this.normalArray[i + 3] = c[e];
        this.normalArray[i + 4] = c[e + 1];
        this.normalArray[i + 5] = c[e + 2];
        this.normalArray[i + 6] = c[f];
        this.normalArray[i + 7] = c[f + 1];
        this.normalArray[i + 8] = c[f + 2];
        this.hasNormal = this.hasPos = !0;
        this.count += 3;
        this.count >= this.maxCount - 3 && h(this)
    };
    this.begin =
        function () {
            this.count = 0;
            this.hasNormal = this.hasPos = !1
    };
    this.end = function (a) {
        if (this.count !== 0) {
            for (var c = this.count * 3; c < this.positionArray.length; c++) this.positionArray[c] = 0;
            a(this)
        }
    };
    this.addBall = function (a, c, g, e, f) {
        var h = this.size * Math.sqrt(e / f),
            i = g * this.size,
            l = c * this.size,
            k = a * this.size,
            p = Math.floor(i - h);
        p < 1 && (p = 1);
        i = Math.floor(i + h);
        i > this.size - 1 && (i = this.size - 1);
        var q = Math.floor(l - h);
        q < 1 && (q = 1);
        l = Math.floor(l + h);
        l > this.size - 1 && (l = this.size - 1);
        var m = Math.floor(k - h);
        m < 1 && (m = 1);
        h = Math.floor(k + h);
        h > this.size - 1 && (h = this.size - 1);
        for (var t, n, o, s, u, r; p < i; p++) {
            k = this.size2 * p;
            n = p / this.size - g;
            u = n * n;
            for (n = q; n < l; n++) {
                o = k + this.size * n;
                t = n / this.size - c;
                r = t * t;
                for (t = m; t < h; t++) s = t / this.size - a, s = e / (1.0E-6 + s * s + r + u) - f, s > 0 && (this.field[o + t] += s)
            }
        }
    };
    this.addPlaneX = function (a, c) {
        var g, e, f, h, i, l = this.size,
            k = this.yd,
            p = this.zd,
            q = this.field,
            m = l * Math.sqrt(a / c);
        m > l && (m = l);
        for (g = 0; g < m; g++)
            if (e = g / l, e *= e, h = a / (1.0E-4 + e) - c, h > 0)
                for (e = 0; e < l; e++) {
                    i = g + e * k;
                    for (f = 0; f < l; f++) q[p * f + i] += h
                }
    };
    this.addPlaneY = function (a, c) {
        var g, e, f, h,
            i, l, k = this.size,
            p = this.yd,
            q = this.zd,
            m = this.field,
            t = k * Math.sqrt(a / c);
        t > k && (t = k);
        for (e = 0; e < t; e++)
            if (g = e / k, g *= g, h = a / (1.0E-4 + g) - c, h > 0) {
                i = e * p;
                for (g = 0; g < k; g++) {
                    l = i + g;
                    for (f = 0; f < k; f++) m[q * f + l] += h
                }
            }
    };
    this.addPlaneZ = function (a, c) {
        var g, e, f, h, i, l, k = this.size,
            p = this.yd,
            q = this.zd,
            m = this.field,
            t = k * Math.sqrt(a / c);
        t > k && (t = k);
        for (f = 0; f < t; f++)
            if (g = f / k, g *= g, h = a / (1.0E-4 + g) - c, h > 0) {
                i = q * f;
                for (e = 0; e < k; e++) {
                    l = i + e * p;
                    for (g = 0; g < k; g++) m[l + g] += h
                }
            }
    };
    this.reset = function () {
        var a;
        for (a = 0; a < this.size3; a++) this.normal_cache[a * 3] = 0,
        this.field[a] = 0
    };
    this.render = function (a) {
        this.begin();
        var c, g, e, f, h, i, l, k, p, q = this.size - 2;
        for (f = 1; f < q; f++) {
            p = this.size2 * f;
            l = (f - this.halfsize) / this.halfsize;
            for (e = 1; e < q; e++) {
                k = p + this.size * e;
                i = (e - this.halfsize) / this.halfsize;
                for (g = 1; g < q; g++) h = (g - this.halfsize) / this.halfsize, c = k + g, this.polygonize(h, i, l, c, this.isolation, a)
            }
        }
        this.end(a)
    };
    this.generateGeometry = function () {
        var a = 0,
            c = new THREE.Geometry,
            g = [];
        this.render(function (e) {
            var f, h, i, l, k, p, q, m;
            for (f = 0; f < e.count; f++) q = f * 3, k = q + 1, m = q + 2, h = e.positionArray[q],
            i = e.positionArray[k], l = e.positionArray[m], p = new THREE.Vector3(h, i, l), h = e.normalArray[q], i = e.normalArray[k], l = e.normalArray[m], q = new THREE.Vector3(h, i, l), q.normalize(), k = new THREE.Vertex(p), c.vertices.push(k), g.push(q);
            p = e.count / 3;
            for (f = 0; f < p; f++) q = (a + f) * 3, k = q + 1, m = q + 2, h = g[q], i = g[k], l = g[m], q = new THREE.Face3(q, k, m, [h, i, l]), c.faces.push(q);
            a += p;
            e.count = 0
        });
        return c
    };
    this.init(a)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107,
    1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170,
    419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0
]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5,
    8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6,
    5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
    10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
    6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
    8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7,
    2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11,
    2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11,
    4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10,
    2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
]);
THREE.PlaneCollider = function (a, c) {
    this.point = a;
    this.normal = c
};
THREE.SphereCollider = function (a, c) {
    this.center = a;
    this.radius = c;
    this.radiusSq = c * c
};
THREE.BoxCollider = function (a, c) {
    this.min = a;
    this.max = c;
    this.dynamic = !0;
    this.normal = new THREE.Vector3
};
THREE.MeshCollider = function (a, c) {
    this.mesh = a;
    this.box = c;
    this.numFaces = this.mesh.geometry.faces.length;
    this.normal = new THREE.Vector3
};
THREE.CollisionSystem = function () {
    this.collisionNormal = new THREE.Vector3;
    this.colliders = [];
    this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.merge = function (a) {
    Array.prototype.push.apply(this.colliders, a.colliders);
    Array.prototype.push.apply(this.hits, a.hits)
};
THREE.CollisionSystem.prototype.rayCastAll = function (a) {
    a.direction.normalize();
    this.hits.length = 0;
    var c, b, d, g, e = 0;
    c = 0;
    for (b = this.colliders.length; c < b; c++)
        if (g = this.colliders[c], d = this.rayCast(a, g), d < Number.MAX_VALUE) g.distance = d, d > e ? this.hits.push(g) : this.hits.unshift(g), e = d;
    return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function (a) {
    var c = this.rayCastAll(a);
    if (c.length == 0) return null;
    for (var b = 0; c[b] instanceof THREE.MeshCollider;) {
        var d = this.rayMesh(a, c[b]);
        if (d.dist < Number.MAX_VALUE) {
            c[b].distance = d.dist;
            c[b].faceIndex = d.faceIndex;
            break
        }
        b++
    }
    if (b > c.length) return null;
    return c[b]
};
THREE.CollisionSystem.prototype.rayCast = function (a, c) {
    if (c instanceof THREE.PlaneCollider) return this.rayPlane(a, c);
    else if (c instanceof THREE.SphereCollider) return this.raySphere(a, c);
    else if (c instanceof THREE.BoxCollider) return this.rayBox(a, c);
    else if (c instanceof THREE.MeshCollider && c.box) return this.rayBox(a, c.box)
};
THREE.CollisionSystem.prototype.rayMesh = function (a, c) {
    for (var b = this.makeRayLocal(a, c.mesh), d = Number.MAX_VALUE, g, e = 0; e < c.numFaces; e++) {
        var f = c.mesh.geometry.faces[e],
            h = c.mesh.geometry.vertices[f.a].position,
            i = c.mesh.geometry.vertices[f.b].position,
            l = c.mesh.geometry.vertices[f.c].position,
            k = f instanceof THREE.Face4 ? c.mesh.geometry.vertices[f.d].position : null;
        f instanceof THREE.Face3 ? (f = this.rayTriangle(b, h, i, l, d, this.collisionNormal, c.mesh), f < d && (d = f, g = e, c.normal.copy(this.collisionNormal), c.normal.normalize())) :
            f instanceof THREE.Face4 && (f = this.rayTriangle(b, h, i, k, d, this.collisionNormal, c.mesh), f < d && (d = f, g = e, c.normal.copy(this.collisionNormal), c.normal.normalize()), f = this.rayTriangle(b, i, l, k, d, this.collisionNormal, c.mesh), f < d && (d = f, g = e, c.normal.copy(this.collisionNormal), c.normal.normalize()))
    }
    return {
        dist: d,
        faceIndex: g
    }
};
THREE.CollisionSystem.prototype.rayTriangle = function (a, c, b, d, g, e, f) {
    var h = THREE.CollisionSystem.__v1,
        i = THREE.CollisionSystem.__v2;
    e.set(0, 0, 0);
    h.sub(b, c);
    i.sub(d, b);
    e.cross(h, i);
    h = e.dot(a.direction);
    if (!(h < 0))
        if (f.doubleSided || f.flipSided) e.multiplyScalar(-1), h *= -1;
        else return Number.MAX_VALUE;
    f = e.dot(c) - e.dot(a.origin);
    if (!(f <= 0)) return Number.MAX_VALUE;
    if (!(f >= h * g)) return Number.MAX_VALUE;
    f /= h;
    h = THREE.CollisionSystem.__v3;
    h.copy(a.direction);
    h.multiplyScalar(f);
    h.addSelf(a.origin);
    Math.abs(e.x) >
        Math.abs(e.y) ? Math.abs(e.x) > Math.abs(e.z) ? (a = h.y - c.y, e = b.y - c.y, g = d.y - c.y, h = h.z - c.z, b = b.z - c.z, d = d.z - c.z) : (a = h.x - c.x, e = b.x - c.x, g = d.x - c.x, h = h.y - c.y, b = b.y - c.y, d = d.y - c.y) : Math.abs(e.y) > Math.abs(e.z) ? (a = h.x - c.x, e = b.x - c.x, g = d.x - c.x, h = h.z - c.z, b = b.z - c.z, d = d.z - c.z) : (a = h.x - c.x, e = b.x - c.x, g = d.x - c.x, h = h.y - c.y, b = b.y - c.y, d = d.y - c.y);
    c = e * d - b * g;
    if (c == 0) return Number.MAX_VALUE;
    c = 1 / c;
    d = (a * d - h * g) * c;
    if (!(d >= 0)) return Number.MAX_VALUE;
    c *= e * h - b * a;
    if (!(c >= 0)) return Number.MAX_VALUE;
    if (!(1 - d - c >= 0)) return Number.MAX_VALUE;
    return f
};
THREE.CollisionSystem.prototype.makeRayLocal = function (a, c) {
    var b = THREE.CollisionSystem.__m;
    b.getInverse(c.matrixWorld);
    var d = THREE.CollisionSystem.__r;
    d.origin.copy(a.origin);
    d.direction.copy(a.direction);
    b.multiplyVector3(d.origin);
    b.rotateAxis(d.direction);
    d.direction.normalize();
    return d
};
THREE.CollisionSystem.prototype.rayBox = function (a, c) {
    var b;
    c.dynamic && c.mesh && c.mesh.matrixWorld ? b = this.makeRayLocal(a, c.mesh) : (b = THREE.CollisionSystem.__r, b.origin.copy(a.origin), b.direction.copy(a.direction));
    var d = 0,
        g = 0,
        e = 0,
        f = 0,
        h = 0,
        i = 0,
        l = !0;
    b.origin.x < c.min.x ? (d = c.min.x - b.origin.x, d /= b.direction.x, l = !1, f = -1) : b.origin.x > c.max.x && (d = c.max.x - b.origin.x, d /= b.direction.x, l = !1, f = 1);
    b.origin.y < c.min.y ? (g = c.min.y - b.origin.y, g /= b.direction.y, l = !1, h = -1) : b.origin.y > c.max.y && (g = c.max.y - b.origin.y, g /= b.direction.y,
        l = !1, h = 1);
    b.origin.z < c.min.z ? (e = c.min.z - b.origin.z, e /= b.direction.z, l = !1, i = -1) : b.origin.z > c.max.z && (e = c.max.z - b.origin.z, e /= b.direction.z, l = !1, i = 1);
    if (l) return -1;
    l = 0;
    g > d && (l = 1, d = g);
    e > d && (l = 2, d = e);
    switch (l) {
    case 0:
        h = b.origin.y + b.direction.y * d;
        if (h < c.min.y || h > c.max.y) return Number.MAX_VALUE;
        b = b.origin.z + b.direction.z * d;
        if (b < c.min.z || b > c.max.z) return Number.MAX_VALUE;
        c.normal.set(f, 0, 0);
        break;
    case 1:
        f = b.origin.x + b.direction.x * d;
        if (f < c.min.x || f > c.max.x) return Number.MAX_VALUE;
        b = b.origin.z + b.direction.z *
            d;
        if (b < c.min.z || b > c.max.z) return Number.MAX_VALUE;
        c.normal.set(0, h, 0);
        break;
    case 2:
        f = b.origin.x + b.direction.x * d;
        if (f < c.min.x || f > c.max.x) return Number.MAX_VALUE;
        h = b.origin.y + b.direction.y * d;
        if (h < c.min.y || h > c.max.y) return Number.MAX_VALUE;
        c.normal.set(0, 0, i)
    }
    return d
};
THREE.CollisionSystem.prototype.rayPlane = function (a, c) {
    var b = a.direction.dot(c.normal),
        d = c.point.dot(c.normal);
    if (b < 0) b = (d - a.origin.dot(c.normal)) / b;
    else return Number.MAX_VALUE;
    return b > 0 ? b : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function (a, c) {
    var b = c.center.clone().subSelf(a.origin);
    if (b.lengthSq < c.radiusSq) return -1;
    var d = b.dot(a.direction.clone());
    if (d <= 0) return Number.MAX_VALUE;
    b = c.radiusSq - (b.lengthSq() - d * d);
    if (b >= 0) return Math.abs(d) - Math.sqrt(b);
    return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionSystem.__nr = new THREE.Vector3;
THREE.CollisionSystem.__m = new THREE.Matrix4;
THREE.CollisionSystem.__r = new THREE.Ray;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function (a) {
    a.geometry.computeBoundingBox();
    var c = a.geometry.boundingBox,
        b = new THREE.Vector3(c.x[0], c.y[0], c.z[0]),
        c = new THREE.Vector3(c.x[1], c.y[1], c.z[1]),
        b = new THREE.BoxCollider(b, c);
    b.mesh = a;
    return b
};
THREE.CollisionUtils.MeshAABB = function (a) {
    var c = THREE.CollisionUtils.MeshOBB(a);
    c.min.addSelf(a.position);
    c.max.addSelf(a.position);
    c.dynamic = !1;
    return c
};
THREE.CollisionUtils.MeshColliderWBox = function (a) {
    return new THREE.MeshCollider(a, THREE.CollisionUtils.MeshOBB(a))
};
if (THREE.WebGLRenderer) THREE.AnaglyphWebGLRenderer = function (a) {
    THREE.WebGLRenderer.call(this, a);
    this.autoUpdateScene = !1;
    var c = this,
        b = this.setSize,
        d = this.render,
        g = new THREE.PerspectiveCamera,
        e = new THREE.PerspectiveCamera,
        f = new THREE.Matrix4,
        h = new THREE.Matrix4,
        i, l, k, p;
    g.matrixAutoUpdate = e.matrixAutoUpdate = !1;
    var a = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    }, q = new THREE.WebGLRenderTarget(512, 512, a),
        m = new THREE.WebGLRenderTarget(512, 512, a),
        t = new THREE.PerspectiveCamera(53,
            1, 1, 1E4);
    t.position.z = 2;
    var a = new THREE.ShaderMaterial({
        uniforms: {
            mapLeft: {
                type: "t",
                value: 0,
                texture: q
            },
            mapRight: {
                type: "t",
                value: 1,
                texture: m
            }
        },
        vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D mapLeft;\nuniform sampler2D mapRight;\nvarying vec2 vUv;\nvoid main() {\nvec4 colorL, colorR;\nvec2 uv = vUv;\ncolorL = texture2D( mapLeft, uv );\ncolorR = texture2D( mapRight, uv );\ngl_FragColor = vec4( colorL.g * 0.7 + colorL.b * 0.3, colorR.g, colorR.b, colorL.a + colorR.a ) * 1.1;\n}"
    }),
        n = new THREE.Scene;
    n.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), a));
    n.add(t);
    this.setSize = function (a, d) {
        b.call(c, a, d);
        q.width = a;
        q.height = d;
        m.width = a;
        m.height = d
    };
    this.render = function (a, b) {
        a.updateMatrixWorld();
        if (i !== b.aspect || l !== b.near || k !== b.far || p !== b.fov) {
            i = b.aspect;
            l = b.near;
            k = b.far;
            p = b.fov;
            var u = b.projectionMatrix.clone(),
                r = 125 / 30 * 0.5,
                z = r * l / 125,
                E = l * Math.tan(p * Math.PI / 360),
                G;
            f.n14 = r;
            h.n14 = -r;
            r = -E * i + z;
            G = E * i + z;
            u.n11 = 2 * l / (G - r);
            u.n13 = (G + r) / (G - r);
            g.projectionMatrix.copy(u);
            r = -E * i - z;
            G = E * i - z;
            u.n11 =
                2 * l / (G - r);
            u.n13 = (G + r) / (G - r);
            e.projectionMatrix.copy(u)
        }
        g.matrixWorld.copy(b.matrixWorld).multiplySelf(h);
        g.position.copy(b.position);
        g.near = b.near;
        g.far = b.far;
        d.call(c, a, g, q, !0);
        e.matrixWorld.copy(b.matrixWorld).multiplySelf(f);
        e.position.copy(b.position);
        e.near = b.near;
        e.far = b.far;
        d.call(c, a, e, m, !0);
        n.updateMatrixWorld();
        d.call(c, n, t)
    }
};
if (THREE.WebGLRenderer) THREE.CrosseyedWebGLRenderer = function (a) {
    THREE.WebGLRenderer.call(this, a);
    this.autoClear = !1;
    var c = this,
        b = this.setSize,
        d = this.render,
        g, e, f = new THREE.PerspectiveCamera;
    f.target = new THREE.Vector3(0, 0, 0);
    var h = new THREE.PerspectiveCamera;
    h.target = new THREE.Vector3(0, 0, 0);
    c.separation = 10;
    if (a && a.separation !== void 0) c.separation = a.separation;
    this.setSize = function (a, d) {
        b.call(c, a, d);
        g = a / 2;
        e = d
    };
    this.render = function (a, b) {
        this.clear();
        f.fov = b.fov;
        f.aspect = 0.5 * b.aspect;
        f.near = b.near;
        f.far =
            b.far;
        f.updateProjectionMatrix();
        f.position.copy(b.position);
        f.target.copy(b.target);
        f.translateX(c.separation);
        f.lookAt(f.target);
        h.projectionMatrix = f.projectionMatrix;
        h.position.copy(b.position);
        h.target.copy(b.target);
        h.translateX(-c.separation);
        h.lookAt(h.target);
        this.setViewport(0, 0, g, e);
        d.call(c, a, f);
        this.setViewport(g, 0, g, e);
        d.call(c, a, h, !1)
    }
};






/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();
	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;
	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;
	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	// pass in distance in world space to move left
	this.panLeft = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get X column of matrix
		panOffset.set( te[0], te[1], te[2] );
		panOffset.multiplyScalar(-distance);
		
		pan.add( panOffset );

	};

	// pass in distance in world space to move up
	this.panUp = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get Y column of matrix
		panOffset.set( te[4], te[5], te[6] );
		panOffset.multiplyScalar(distance);
		
		pan.add( panOffset );
	};
	
	// main entry point; pass in Vector2 of change desired in pixel space,
	// right and down are positive
	this.pan = function ( delta ) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( scope.object.fov !== undefined ) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub( scope.target );
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan( (scope.object.fov/2) * Math.PI / 180.0 );
			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft( 2 * delta.x * targetDistance / element.clientHeight );
			scope.panUp( 2 * delta.y * targetDistance / element.clientHeight );

		} else if ( scope.object.top !== undefined ) {

			// orthographic
			scope.panLeft( delta.x * (scope.object.right - scope.object.left) / element.clientWidth );
			scope.panUp( delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight );

		} else {

			// camera neither orthographic or perspective - warn user
			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

		}

	};

	this.dollyIn = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub( this.target );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
		
		// move target to panned location
		this.target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.target ).add( offset );

		this.object.lookAt( this.target );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set(0,0,0);

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function onMouseDown( event ) {

		if ( scope.enabled === false ) { return; }
		event.preventDefault();

		if ( event.button === 0 ) {
			if ( scope.noRotate === true ) { return; }

			state = STATE.ROTATE;

			rotateStart.set( event.clientX, event.clientY );

		} else if ( event.button === 1 ) {
			if ( scope.noZoom === true ) { return; }

			state = STATE.DOLLY;

			dollyStart.set( event.clientX, event.clientY );

		} else if ( event.button === 2 ) {
			if ( scope.noPan === true ) { return; }

			state = STATE.PAN;

			panStart.set( event.clientX, event.clientY );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( state === STATE.ROTATE ) {

			if ( scope.noRotate === true ) return;

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.noZoom === true ) return;

			dollyEnd.set( event.clientX, event.clientY );
			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy( dollyEnd );

		} else if ( state === STATE.PAN ) {

			if ( scope.noPan === true ) return;

			panEnd.set( event.clientX, event.clientY );
			panDelta.subVectors( panEnd, panStart );
			
			scope.pan( panDelta );

			panStart.copy( panEnd );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.update();

	}

	function onMouseUp( /* event */ ) {

		if ( scope.enabled === false ) return;

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.noZoom === true ) return;

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false ) { return; }
		if ( scope.noKeys === true ) { return; }
		if ( scope.noPan === true ) { return; }

		// pan a pixel - I guess for precise positioning?
		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		var needUpdate = false;
		
		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan( new THREE.Vector2( 0, scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.BOTTOM:
				scope.pan( new THREE.Vector2( 0, -scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.LEFT:
				scope.pan( new THREE.Vector2( scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
			case scope.keys.RIGHT:
				scope.pan( new THREE.Vector2( -scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		if ( needUpdate ) {

			scope.update();

		}

	}
	
	function touchstart( event ) {

		if ( scope.enabled === false ) { return; }

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }

				state = STATE.TOUCH_ROTATE;

				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			case 2:	// two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				dollyStart.set( 0, distance );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }

				state = STATE.TOUCH_PAN;

				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			default:
				state = STATE.NONE;

		}
	}

	function touchmove( event ) {

		if ( scope.enabled === false ) { return; }

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }
				if ( state !== STATE.TOUCH_ROTATE ) { return; }

				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );
				break;

			case 2: // two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }
				if ( state !== STATE.TOUCH_DOLLY ) { return; }

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy( dollyEnd );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }
				if ( state !== STATE.TOUCH_PAN ) { return; }

				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				panDelta.subVectors( panEnd, panStart );
				
				scope.pan( panDelta );

				panStart.copy( panEnd );
				break;

			default:
				state = STATE.NONE;

		}

	}

	function touchend( /* event */ ) {

		if ( scope.enabled === false ) { return; }

		state = STATE.NONE;
	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	this.domElement.addEventListener( 'keydown', onKeyDown, false );

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

};

