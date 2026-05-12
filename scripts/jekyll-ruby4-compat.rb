# Minimal compatibility shim for running the GitHub Pages Jekyll stack on Ruby 4+.
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def untaint
      self
    end
  end
end
