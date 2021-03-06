export let request = {
  'comment': {
    'links': {
      'self': {
        'href':
          'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/comments/41890851'
      },
      'html': {
        'href': 'https://bitbucket.org/Izak88/test/pull-requests/1/_/diff#comment-41890851'
      }
    },
    'pullrequest': {
      'type': 'pullrequest',
      'id': 1,
      'links': {
        'self': {
          'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1'
        },
        'html': {
          'href': 'https://bitbucket.org/Izak88/test/pull-requests/1'
        }
      },
      'title': 'test pr'
    },
    'content': {
      'raw': 'test comment',
      'markup': 'markdown',
      'html': '<p>test comment</p>'
    },
    'created_on': '2017-08-01T09:26:51.818442+00:00',
    'user': {
      'username': 'Izak88',
      'type': 'user',
      'display_name': 'Izak',
      'uuid': '{89aa91f6-b254-4f9f-9fd6-ab5fdf729bca}',
      'links': {
        'self': {
          'href': 'https://api.bitbucket.org/2.0/users/Izak88'
        },
        'html': {
          'href': 'https://bitbucket.org/Izak88/'
        },
        'avatar': {
          'href': 'https://bitbucket.org/account/Izak88/avatar/32/'
        }
      }
    },
    'updated_on': '2017-08-01T09:26:51.820267+00:00',
    'type': 'pullrequest_comment',
    'id': 41890851
  },
  'pullrequest': {
    'type': 'pullrequest',
    'description': '',
    'links': {
      'decline': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/decline'
      },
      'commits': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/commits'
      },
      'self': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1'
      },
      'comments': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/comments'
      },
      'merge': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/merge'
      },
      'html': {
        'href': 'https://bitbucket.org/Izak88/test/pull-requests/1'
      },
      'activity': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/activity'
      },
      'diff': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/diff'
      },
      'approve': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/approve'
      },
      'statuses': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/pullrequests/1/statuses'
      }
    },
    'title': 'test pr',
    'close_source_branch': false,
    'reviewers': [],
    'destination': {
      'commit': {
        'hash': '5fe88c29cc81',
        'links': {
          'self': {
            'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/commit/5fe88c29cc81'
          }
        }
      },
      'branch': {
        'name': 'master'
      },
      'repository': {
        'full_name': 'Izak88/test',
        'type': 'repository',
        'name': 'test',
        'links': {
          'self': {
            'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test'
          },
          'html': {
            'href': 'https://bitbucket.org/Izak88/test'
          },
          'avatar': {
            'href': 'https://bitbucket.org/Izak88/test/avatar/32/'
          }
        },
        'uuid': '{555997f5-1f4c-4afa-9c63-71e3ee5d725b}'
      }
    },
    'comment_count': 1,
    'id': 1,
    'source': {
      'commit': {
        'hash': '14cfcda75f7d',
        'links': {
          'self': {
            'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test/commit/14cfcda75f7d'
          }
        }
      },
      'branch': {
        'name': 'test-branch'
      },
      'repository': {
        'full_name': 'Izak88/test',
        'type': 'repository',
        'name': 'test',
        'links': {
          'self': {
            'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test'
          },
          'html': {
            'href': 'https://bitbucket.org/Izak88/test'
          },
          'avatar': {
            'href': 'https://bitbucket.org/Izak88/test/avatar/32/'
          }
        },
        'uuid': '{555997f5-1f4c-4afa-9c63-71e3ee5d725b}'
      }
    },
    'state': 'OPEN',
    'author': {
      'username': 'Izak88',
      'type': 'user',
      'display_name': 'Izak',
      'uuid': '{89aa91f6-b254-4f9f-9fd6-ab5fdf729bca}',
      'links': {
        'self': {
          'href': 'https://api.bitbucket.org/2.0/users/Izak88'
        },
        'html': {
          'href': 'https://bitbucket.org/Izak88/'
        },
        'avatar': {
          'href': 'https://bitbucket.org/account/Izak88/avatar/32/'
        }
      }
    },
    'created_on': '2017-08-01T08:01:16.704797+00:00',
    'participants': [
      {
        'type': 'participant',
        'role': 'PARTICIPANT',
        'user': {
          'username': 'Izak88',
          'type': 'user',
          'display_name': 'Izak',
          'uuid': '{89aa91f6-b254-4f9f-9fd6-ab5fdf729bca}',
          'links': {
            'self': {
              'href': 'https://api.bitbucket.org/2.0/users/Izak88'
            },
            'html': {
              'href': 'https://bitbucket.org/Izak88/'
            },
            'avatar': {
              'href': 'https://bitbucket.org/account/Izak88/avatar/32/'
            }
          }
        },
        'approved': false
      }
    ],
    'reason': '',
    'updated_on': '2017-08-01T09:26:51.856339+00:00',
    'merge_commit': null,
    'closed_by': null,
    'task_count': 0
  },
  'actor': {
    'username': 'Izak88',
    'type': 'user',
    'display_name': 'Izak',
    'uuid': '{89aa91f6-b254-4f9f-9fd6-ab5fdf729bca}',
    'links': {
      'self': {
        'href': 'https://api.bitbucket.org/2.0/users/Izak88'
      },
      'html': {
        'href': 'https://bitbucket.org/Izak88/'
      },
      'avatar': {
        'href': 'https://bitbucket.org/account/Izak88/avatar/32/'
      }
    }
  },
  'repository': {
    'scm': 'git',
    'website': '',
    'name': 'test',
    'links': {
      'self': {
        'href': 'https://api.bitbucket.org/2.0/repositories/Izak88/test'
      },
      'html': {
        'href': 'https://bitbucket.org/Izak88/test'
      },
      'avatar': {
        'href': 'https://bitbucket.org/Izak88/test/avatar/32/'
      }
    },
    'full_name': 'Izak88/test',
    'owner': {
      'username': 'Izak88',
      'type': 'user',
      'display_name': 'Izak',
      'uuid': '{89aa91f6-b254-4f9f-9fd6-ab5fdf729bca}',
      'links': {
        'self': {
          'href': 'https://api.bitbucket.org/2.0/users/Izak88'
        },
        'html': {
          'href': 'https://bitbucket.org/Izak88/'
        },
        'avatar': {
          'href': 'https://bitbucket.org/account/Izak88/avatar/32/'
        }
      }
    },
    'type': 'repository',
    'is_private': false,
    'uuid': '{555997f5-1f4c-4afa-9c63-71e3ee5d725b}'
  }
};

export let headerPullRequestCommentCreated = {
  'X-Request-UUID':	'4cf2df45-9eb5-421a-a525-7606aeb0957d',
  'X-Event-Key':	'pullrequest:comment_created',
  'User-Agent':	'Bitbucket-Webhooks/2.0',
  'X-Attempt-Number': 1,
  'X-Hook-UUID':	'0302255c-f4f0-4232-916b-bef521fbdd08',
  'Content-Type': 'application/json'
};

export let headerPullRequestCommentUpdated = {
  'X-Request-UUID':	'4cf2df45-9eb5-421a-a525-7606aeb0957d',
  'X-Event-Key':	'pullrequest:comment_updated',
  'User-Agent':	'Bitbucket-Webhooks/2.0',
  'X-Attempt-Number': 1,
  'X-Hook-UUID':	'0302255c-f4f0-4232-916b-bef521fbdd08',
  'Content-Type': 'application/json'
};

export let headerPullRequestCommentDeleted = {
  'X-Request-UUID':	'4cf2df45-9eb5-421a-a525-7606aeb0957d',
  'X-Event-Key':	'pullrequest:comment_deleted',
  'User-Agent':	'Bitbucket-Webhooks/2.0',
  'X-Attempt-Number': 1,
  'X-Hook-UUID':	'0302255c-f4f0-4232-916b-bef521fbdd08',
  'Content-Type': 'application/json'
};
